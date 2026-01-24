
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
    # Match values: either 'string' or ['string', 'string']
    # We look for key: value pattern.
    # Simplified approach: just look for all strings on the right side of a colon?
    # No, that's hard because keys also have strings.
    # Let's match line by line or property by property.
    
    # Matches: key : value
    # Value can be '...' or [...]
    $matches = [regex]::Matches($recipesContent, ":\s*('([^']+)'|\[(.*?)\])")
    
    foreach ($m in $matches) {
        if ($m.Groups[2].Success) {
            # Single string
            $recipeTargets[$m.Groups[2].Value] = $true
        }
        elseif ($m.Groups[3].Success) {
            # Array content
            $arrayContent = $m.Groups[3].Value
            $innerMatches = [regex]::Matches($arrayContent, "'([^']+)'")
            foreach ($im in $innerMatches) {
                $recipeTargets[$im.Groups[1].Value] = $true
            }
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
