
// === Gather Probabilities definition ===
// Threshold based logic: rand < threshold -> item
const GATHER_DATA = {
    'water': [
        { th: 0.1, id: 'fish' },
        { th: 0.2, id: 'seaweed' },
        { th: 0.3, id: 'cowrie' },
        { th: 0.6, id: 'shell' },
        { th: 0.7, id: 'sand' },
        { th: 1.0, id: 'water' }
    ],
    'sun': [{ th: 1.0, id: 'sun' }],
    'forest': [
        { th: 0.30, id: 'wood' },
        { th: 0.40, id: 'vegetable' },
        { th: 0.50, id: 'plant' },
        { th: 0.60, id: 'grape' },
        { th: 0.65, id: 'flower' },
        { th: 0.75, id: 'bamboo' },
        { th: 0.80, id: 'egg' },
        { th: 0.85, id: 'lacquer' },
        { th: 0.95, id: 'stone' },
        { th: 1.00, id: 'animal' }
    ],
    'land': [
        { th: 0.15, id: 'diatomaceous_earth' },
        { th: 0.40, id: 'clay' },
        { th: 0.50, id: 'fossil' },
        { th: 1.00, id: 'earth' }
    ],
    'air': [
        { th: 0.05, id: 'lightning' },
        { th: 1.00, id: 'air' }
    ],
    'river': [
        { th: 0.001, id: 'platinum' },
        { th: 0.05, id: 'rutile' },
        { th: 0.101, id: 'gold_dust' },
        { th: 0.301, id: 'iron_sand', cond: 'magnet' }, // Condition: has magnet
        { th: 0.5, id: 'stone' },
        { th: 0.7, id: 'sand' },
        { th: 1.0, id: 'fresh_water' }
    ],
    'ore': [
        // Special logic: multiplied by 3 if minecart exists

        // { th: 0.13, id: 'palladium' }, // Removed
        // { th: 0.14, id: 'iridium' },   // Removed
        { th: 0.16, id: 'cinnabar' },
        { th: 0.18, id: 'copper_sulfate' },
        { th: 0.23, id: 'cassiterite' },
        { th: 0.35, id: 'galena' },
        { th: 0.42, id: 'sphalerite' },
        { th: 0.53, id: 'coal' },
        { th: 0.61, id: 'graphite' },
        { th: 0.68, id: 'magnetite' },
        { th: 0.75, id: 'scheelite' },
        { th: 0.85, id: 'calcite' },
        { th: 1.00, id: 'stone' }
    ],
    'onsen': [{ th: 1.0, id: 'sulfur' }],
    'home': [{ th: 1.0, id: 'urine' }],
    'oil': [{ th: 1.0, id: 'crude_oil' }],
    // 'foreign' is handled separately (modal open)
    'jungle': [
        { th: 0.6, id: 'rubber_tree' },
        { th: 1.0, id: 'sugarcane' }
    ],
    'spice_field': [{ th: 1.0, id: 'spice' }],
    'corn_field': [
        { th: 0.45, id: 'corn' },
        { th: 0.65, id: 'wheat' },
        { th: 0.85, id: 'cotton' },
        { th: 0.95, id: 'animal' },
        { th: 1.00, id: 'earth' }
    ],
    'oil_field': [
        { th: 0.10, id: 'fuel' },
        { th: 0.60, id: 'crude_oil' },
        { th: 0.75, id: 'shale_rock' },
        { th: 0.85, id: 'earth' },
        { th: 0.95, id: 'coal' },
        { th: 1.00, id: 'stone' }
    ],
    'andes': [
        { th: 0.4, id: 'tomato' },
        { th: 0.7, id: 'potato' },
        { th: 1.0, id: 'copper_ore' }
    ],
    'amazon': [{ th: 1.0, id: 'cacao' }],
    'araxa_mine': [
        { th: 0.7, id: 'pyrochlore' },
        { th: 0.9, id: 'monazite' },
        { th: 1.0, id: 'stone' }
    ],
    'bolivia_mine': [
        { th: 0.35, id: 'bismuth_ore' },
        { th: 0.65, id: 'cassiterite' },
        { th: 0.80, id: 'antimony' },
        { th: 0.90, id: 'scheelite' },
        { th: 1.00, id: 'stone' }
    ],
    'salt_lake': [
        { th: 0.6, id: 'brine' },
        { th: 1.0, id: 'salt' }
    ],
    'olive_grove': [{ th: 1.0, id: 'olive' }],
    'spanish_coast': [{ th: 1.0, id: 'fluorite' }],
    'savannah': [
        { th: 0.30, id: 'earth' },
        { th: 0.50, id: 'stone' },
        { th: 0.65, id: 'animal' },
        { th: 0.75, id: 'coffee_bean' },
        { th: 0.77, id: 'diamond' },
        { th: 0.82, id: 'chromite' },
        { th: 0.85, id: 'manganese_dioxide' },
        { th: 0.88, id: 'pentlandite' },
        { th: 0.94, id: 'molybdenite' },
        { th: 0.98, id: 'rutile' },
        { th: 1.00, id: 'pgm_ore' }
    ],
    'red_desert': [
        { th: 0.30, id: 'bauxite' },
        { th: 0.50, id: 'iron_ore' },
        { th: 0.60, id: 'manganese_dioxide' },
        { th: 0.65, id: 'cobalt_ore' },
        { th: 0.78, id: 'monazite' },
        { th: 0.88, id: 'lithium_ore' },
        { th: 0.95, id: 'uranium_ore' },
        { th: 1.00, id: 'sand' }
    ],
    'crater': [
        { th: 0.35, id: 'stone' }, // Moon rock
        { th: 0.55, id: 'sand' },
        { th: 0.75, id: 'iron_ore' },
        { th: 0.90, id: 'titanium_sponge' },
        { th: 0.95, id: 'platinum' },
        { th: 1.00, id: 'iridium' }
    ],
    'mars_surface': [
        { th: 0.30, id: 'martian_soil' },
        { th: 0.50, id: 'stone' },
        { th: 0.70, id: 'dry_ice' },
        { th: 0.80, id: 'permafrost' },
        { th: 0.95, id: 'iron_ore' },
        { th: 1.00, id: 'sand' }
    ],
    'sugarcane_field': [
        { th: 0.60, id: 'sugarcane' },
        { th: 0.80, id: 'plant' },
        { th: 1.00, id: 'earth' }
    ],
    'coral_reef': [
        { th: 0.40, id: 'shell' },
        { th: 0.60, id: 'calcium_carbonate' }, // Coral
        { th: 0.70, id: 'sand' },
        { th: 1.00, id: 'water' }
    ],
    'snow_field': [
        { th: 0.50, id: 'wheat' },
        { th: 0.80, id: 'ice' },
        { th: 0.90, id: 'fresh_water' },
        { th: 0.95, id: 'animal' },
        { th: 1.00, id: 'wood' }
    ],
    'coal_mine': [
        { th: 0.60, id: 'coal' },
        { th: 0.80, id: 'stone' },
        { th: 0.95, id: 'iron_ore' },
        { th: 1.00, id: 'clay' }
    ],
    'gold_mine': [
        { th: 0.40, id: 'gold_ore' },
        { th: 0.55, id: 'gold_dust' },
        { th: 0.80, id: 'stone' },
        { th: 1.00, id: 'earth' }
    ],
    'turkey': [
        { th: 0.50, id: 'borax' },
        { th: 0.70, id: 'chromite' },
        { th: 0.85, id: 'olive' },
        { th: 1.00, id: 'stone' }
    ],
    'china': [
        { th: 0.40, id: 'tea_leaf' },
        { th: 0.70, id: 'bamboo' },
        { th: 0.85, id: 'plant' },
        { th: 1.00, id: 'flower' }
    ],
    'uyghur_field': [
        { th: 0.50, id: 'cotton' },
        { th: 0.70, id: 'grape' },
        { th: 0.90, id: 'sand' },
        { th: 1.00, id: 'stone' }
    ],
    'china_mine': [
        { th: 0.20, id: 'coal' },
        { th: 0.35, id: 'scheelite' },
        { th: 0.50, id: 'stibnite' },
        { th: 0.55, id: 'manganese_dioxide' },
        { th: 0.60, id: 'molybdenite' },
        { th: 0.70, id: 'monazite' },
        { th: 0.80, id: 'clay' },
        { th: 0.88, id: 'fluorite' },
        { th: 0.96, id: 'barite' },
        { th: 1.00, id: 'stone' }
    ],
    'antarctica': [
        { th: 0.10, id: 'penguin' },
        { th: 0.20, id: 'meteorite' },
        { th: 0.30, id: 'ice_core' },
        { th: 0.70, id: 'ice' },
        { th: 1.00, id: 'water' }
    ],
    'deep_sea': [
        { th: 0.10, id: 'colossal_squid' },
        { th: 0.30, id: 'deep_sea_fish' },
        { th: 0.50, id: 'hydrothermal_vent' },
        { th: 0.70, id: 'manganese_nodule' },
        { th: 1.00, id: 'water' }
    ]
};
