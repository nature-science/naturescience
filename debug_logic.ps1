
$path = "$PSScriptRoot\script.js"
$content = Get-Content $path -Raw

# 1. Parse ELEMENTS
$elementsMatch = [regex]::Match($content, "(?ms)const ELEMENTS = \{(.*?)\};")
$elements = @{}
if ($elementsMatch.Success) {
    $elementsContent = $elementsMatch.Groups[1].Value
    $keyMatches = [regex]::Matches($elementsContent, "'([^']+)'\s*:")
    foreach ($m in $keyMatches) { $elements[$m.Groups[1].Value] = $true }
}

# 2. Parse RECIPES (skipping comments)
Write-Host "--- Checking RECIPES for missing ELEMENTS ---"
$recipesMatch = [regex]::Match($content, "(?ms)const RECIPES = \{(.*?)\};\s*(?://|window|function|$)")
if ($recipesMatch.Success) {
    $recipesContent = $recipesMatch.Groups[1].Value
    $lines = $recipesContent -split "`n"
    
    $missingCount = 0
    foreach ($line in $lines) {
        if ($line -match "^\s*'([^']+)'\s*:\s*([^,}]+)") {
            $key = $Matches[1]
            $resultRaw = $Matches[2].Trim()
            
            # Skip if result looks like a comment start (e.g. if it didn't match cleanly)
            if ($resultRaw -match "^//") { continue }

            # Check ingredients
            $ingredients = $key -split "\+"
            foreach ($ing in $ingredients) {
                if (-not $elements.ContainsKey($ing)) {
                    Write-Host "Missing Ingredient: '$ing' (in recipe '$key')"
                    $missingCount++
                }
            }
            
            # Check results
            if ($resultRaw.StartsWith("[")) {
                $results = [regex]::Matches($resultRaw, "'([^']+)'")
                foreach ($r in $results) {
                    $resName = $r.Groups[1].Value
                    if (-not $elements.ContainsKey($resName)) {
                        Write-Host "Missing Result: '$resName' (in recipe '$key')"
                        $missingCount++
                    }
                }
            }
            else {
                # Strip potential trailing comment on the same line
                $resName = $resultRaw -replace "//.*$", ""
                $resName = $resName.Replace("'", "").Trim()
                if (-not $elements.ContainsKey($resName) -and $resName -ne "null" -and $resName -ne "") {
                    Write-Host "Missing Result: '$resName' (in recipe '$key')"
                    $missingCount++
                }
            }
        }
    }
    if ($missingCount -eq 0) { Write-Host "All recipe elements exist." }
}
