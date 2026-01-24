
$path = "$PSScriptRoot\script.js"
$content = Get-Content $path -Raw

# Parse ELEMENTS
$elementsMatch = [regex]::Match($content, "(?ms)const ELEMENTS = \{(.*?)\};")
$elementIds = @()
if ($elementsMatch.Success) {
    $elementsContent = $elementsMatch.Groups[1].Value
    $keyMatches = [regex]::Matches($elementsContent, "'([^']+)'\s*:")
    foreach ($m in $keyMatches) { $elementIds += $m.Groups[1].Value }
}

# Parse RECIPES targets
$recipesMatch = [regex]::Match($content, "(?ms)const RECIPES = \{(.*?)\};\s*(?://|window|function|$)")
$recipeTargets = @{}
if ($recipesMatch.Success) {
    $recipesContent = $recipesMatch.Groups[1].Value
    $targets = [regex]::Matches($recipesContent, ":\s*([^,}]+)")
    foreach ($t in $targets) {
        $raw = $t.Groups[1].Value.Trim()
        if ($raw.StartsWith("[")) {
            $inner = [regex]::Matches($raw, "'([^']+)'")
            foreach ($i in $inner) { $recipeTargets[$i.Groups[1].Value] = $true }
        }
        else {
            $name = $raw.Replace("'", "").Trim()
            $recipeTargets[$name] = $true
        }
    }
}

# Parse gatherables (rough)
$gatherables = @(
    'water', 'sun', 'earth', 'air', 'wood', 'shell', 'iron_ore', 'sand', 'grape', 'plant',
    'stone', 'clay', 'graphite', 'manganese_dioxide', 'copper_sulfate', 'sulfur',
    'lacquer', 'gold_dust', 'iron_sand', 'platinum', 'cinnabar', 'cassiterite', 'coal', 'bamboo',
    'lightning', 'fresh_water', 'urine', 'scheelite', 'magnetite', 'galena', 'sphalerite', 'calcite',
    'diatomaceous_earth', 'olive', 'crude_oil', 'barite',
    'rubber_tree', 'sugarcane', 'spice', 'corn', 'potato', 'cacao', 'fluorite',
    'seaweed', 'fish', 'mercury', 'brine',
    'chromite', 'pentlandite', 'molybdenite', 'pyrochlore', 'rutile',
    'bauxite', 'cobalt_ore', 'monazite', 'lithium_ore', 'uranium_ore',
    'titanium_sponge', 'flower'
)

# Parse Special Sources in showElementDetail
$specialSources = @(
    'iron', 'lead', 'manganese', 'tin', 'mercury', 'bismuth', # Smeltery
    'charcoal', 'wood_vinegar', 'coke', 'coal_tar', 'coal_gas', 'methanol', 'acetone', 'calcium_carbonate', # Carbonization
    'fresh_water', 'salt', 'alcohol', 'light_oil', 'middle_oil', 'heavy_oil', 'anthracene_oil', 'pitch', # Distillery
    'crude_wood_alcohol', 'phenol', 'industrial_naphthalene', 'glacial_acetic_acid', 'sodium_sulfate',
    'lp_gas', 'gasoline', 'naphtha', 'kerosene', 'asphalt', # Oil Refinery
    'benzene', 'phenoxide', 'crude_naphthalene', 'naphthalene', # Extraction
    'battery', 'silver', 'gold_plating'
)

# Find elements with no source
Write-Host "--- Elements with no source ---"
foreach ($id in $elementIds) {
    if ($recipeTargets.ContainsKey($id)) { continue }
    if ($gatherables -contains $id) { continue }
    if ($specialSources -contains $id) { continue }
    
    # Check if it's a key in INDUSTRIAL_PROCESSES
    if ($content -match "key:\s*'$id'") { continue }

    Write-Host "No Source: $id"
}
