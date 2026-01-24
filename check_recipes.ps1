
$path = ".\script.js"

# Read file content
$content = Get-Content $path -Raw

# 1. Check for Exact Duplicates using Regex
$matches = [regex]::Matches($content, "^\s*'([^']+)'\s*:", "Multiline")
$keys = @()
foreach ($match in $matches) {
    $keys += $match.Groups[1].Value
}

Write-Host "Checking for EXACT duplicates..."
$duplicates = $keys | Group-Object | Where-Object { $_.Count -gt 1 }
if ($duplicates) {
    foreach ($dup in $duplicates) {
        Write-Host "Duplicate Key Found: '$($dup.Name)' (Count: $($dup.Count))"
    }
}
else {
    Write-Host "No exact duplicates found."
}

# 2. Check for Normalized Duplicates (A+B vs B+A)
Write-Host "`nChecking for NORMALIZED duplicates (Order mismatch)..."
$normObj = @()
foreach ($k in $keys) {
    $parts = $k -split "\+"
    [Array]::Sort($parts)
    $norm = $parts -join "+"
    $normObj += [PSCustomObject]@{ Original = $k; Normalized = $norm }
}

$normDups = $normObj | Group-Object Normalized | Where-Object { $_.Count -gt 1 }
$foundNormIssue = $false

foreach ($grp in $normDups) {
    # Check if the original keys are different (meaning we have collision like 'A+B' and 'B+A')
    # If original keys are same, it's just the exact duplicate we already found.
    $distinctOriginals = $grp.Group | Select-Object -ExpandProperty Original | Select-Object -Unique
    if ($distinctOriginals.Count -gt 1) {
        $foundNormIssue = $true
        Write-Host "Collision Found for normalized key [$($grp.Name)]:"
        foreach ($orig in $distinctOriginals) {
            Write-Host "  - $orig"
        }
    }
}

if (-not $foundNormIssue) {
    Write-Host "No normalized collisions found."
}
