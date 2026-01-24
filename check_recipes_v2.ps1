
$path = "$PSScriptRoot\script.js"
$content = Get-Content $path -Raw

Write-Host "--- ELEMENTS Check ---"
$elementsMatch = [regex]::Match($content, "(?ms)const ELEMENTS = \{(.*?)\};")
if ($elementsMatch.Success) {
    $elementsContent = $elementsMatch.Groups[1].Value
    $keyMatches = [regex]::Matches($elementsContent, "^\s*'([^']+)'\s*:", "Multiline")
    $keys = @()
    foreach ($m in $keyMatches) { $keys += $m.Groups[1].Value }
    $dups = $keys | Group-Object | Where-Object { $_.Count -gt 1 }
    if ($dups) {
        foreach ($d in $dups) {
            Write-Host "Duplicate Element: '$($d.Name)' (Count: $($d.Count))"
        }
    }
    else {
        Write-Host "No duplicate elements."
    }
}

Write-Host "`n--- RECIPES Check ---"
$recipesMatch = [regex]::Match($content, "(?ms)const RECIPES = \{(.*?)\};\s*(?://|window|function|$)")
if ($recipesMatch.Success) {
    $recipesContent = $recipesMatch.Groups[1].Value
    $keyMatches = [regex]::Matches($recipesContent, "'([^']+)'\s*:")
    $recipeKeys = @()
    foreach ($m in $keyMatches) { $recipeKeys += $m.Groups[1].Value }
    
    $normObj = @()
    foreach ($k in $recipeKeys) {
        $parts = $k -split "\+"
        [Array]::Sort($parts)
        $norm = $parts -join "+"
        $normObj += [PSCustomObject]@{ Original = $k; Normalized = $norm }
    }
    
    $dups = $normObj | Group-Object Normalized | Where-Object { $_.Count -gt 1 }
    $foundIssue = $false
    foreach ($grp in $dups) {
        $foundIssue = $true
        $distinct = $grp.Group | Select-Object -ExpandProperty Original | Select-Object -Unique
        if ($distinct.Count -gt 1) {
            Write-Host "Collision (Order mismatch):"
            foreach ($o in $distinct) {
                Write-Host "  - $o"
            }
        }
        else {
            Write-Host "Exact Duplicate Key in RECIPES: '$($grp.Name)'"
        }
    }
    if (-not $foundIssue) {
        Write-Host "No duplicate recipes found."
    }
}
else {
    Write-Host "Could not find RECIPES block."
}
