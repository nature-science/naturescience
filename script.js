// Game Internal Data
const ELEMENTS = {
    // Basic (Gatherable) - Now includes Ore
    'water': { id: 'water', name: '海水', emoji: '🌊', desc: 'しょっぱい海の恵み。', category: 'natural' },
    'fresh_water': { id: 'fresh_water', name: '水', emoji: '💧', desc: '不純物を取り除いたきれいな水。', category: 'chemical' },
    'shell': { id: 'shell', name: '貝殻', emoji: '🐚', desc: '海で拾ったきれいな貝殻。', category: 'natural' },
    'sand': { id: 'sand', name: '砂', emoji: '🏖️', desc: '海辺のサラサラした砂。', category: 'natural' },
    'sun': { id: 'sun', name: '日光', emoji: '☀️', desc: 'ポカポカする太陽の光。', category: 'natural' },
    'earth': { id: 'earth', name: '土', emoji: '🌱', desc: '肥沃な大地。', category: 'natural' },
    'air': { id: 'air', name: '空気', emoji: '💨', desc: '辺りを漂う気体。', category: 'natural' },
    'wood': { id: 'wood', name: '木材', emoji: '🪵', desc: '乾燥した木。燃えやすそう。', category: 'natural' },
    'iron_ore': { id: 'iron_ore', name: '鉄鉱石', emoji: '⛏️', desc: '鉄を含んだ鉱石。', category: 'natural' },
    'magnetite': { id: 'magnetite', name: '磁鉄鉱', emoji: '🌑', desc: '強い磁性を持つ黒い鉱石。鉄の重要な原料になる。', category: 'natural' },
    'grape': { id: 'grape', name: 'ブドウ', emoji: '🍇', desc: '甘い果実。発酵しやすそう。', category: 'natural' },
    'plant': { id: 'plant', name: '植物', emoji: '🌿', desc: '緑豊かな植物。', category: 'natural' },
    'sugarcane': { id: 'sugarcane', name: 'サトウキビ', emoji: '🎋', desc: '茎に甘い汁をたっぷり含んだ植物。', category: 'natural' },
    'bagasse': { id: 'bagasse', name: 'バガス', emoji: '🍂', desc: 'サトウキビの搾りかす。バイオマス資源として注目されている。', category: 'natural' },
    'molasses': { id: 'molasses', name: '廃糖蜜', emoji: '🍯', desc: '砂糖精製の副産物。糖分を含んだ黒い液体。', category: 'chemical' },
    'bio_plastic': { id: 'bio_plastic', name: 'バイオプラスチック', emoji: '🥤', desc: '植物由来のプラスチック。土に還る環境に優しい素材。', category: 'chemical' },
    'bamboo': { id: 'bamboo', name: '竹', emoji: '🎋', desc: '真っ直ぐ空へ伸びる丈夫な植物。', category: 'natural' },
    'clay': { id: 'clay', name: '粘土', emoji: '🧱', desc: '水を含んでねっとりした土。こねて形を作れそう。', category: 'natural' },
    'admixture': { id: 'admixture', name: '混和材', emoji: '🥣', desc: '砂と粘土を混ぜたもの。建築資材の基礎。', category: 'chemical' },
    'lime_mortar': { id: 'lime_mortar', name: '石灰モルタル', emoji: '🌫️', desc: '砂と石灰（炭酸Ca）に熱を加えて反応させたもの。非常に硬くなる。', category: 'chemical' },
    'fiber': { id: 'fiber', name: '繊維', emoji: '🧵', desc: '植物から取り出した丈夫な糸状のもの。', category: 'chemical' },
    'string': { id: 'string', name: '紐', emoji: '🧶', desc: '繊維をより合わせて作った紐。', category: 'chemical' },
    'bow': { id: 'bow', name: '弓', emoji: '🏹', desc: '木と紐で作った道具。摩擦熱を起こすのにも使える。', category: 'tool' },

    // Crafted
    'fire': { id: 'fire', name: '火', emoji: '🔥', desc: '熱く燃え盛る炎。取扱注意！', category: 'phenomenon' },
    'wine': { id: 'wine', name: 'ワイン', emoji: '🍷', desc: 'ブドウを発酵させた芳醇な液体。', category: 'chemical' },
    'vinegar': { id: 'vinegar', name: '酢酸', emoji: '🍶', desc: '刺激臭のある酸性の液体。ワインが酸化したもの。', category: 'chemical' },
    'earthenware': { id: 'earthenware', name: '土器', emoji: '🏺', desc: '混和材を焼き固めて作った器。', category: 'chemical' },

    // Metals (Refined)
    'iron': { id: 'iron', name: '鉄', emoji: '⛓️', desc: '頑丈な金属。', category: 'chemical' },

    // Level 1 Ingredients
    'steam': { id: 'steam', name: '水蒸気', emoji: '🌫️', desc: '熱せられた水。', category: 'chemical' },
    'hot_water': { id: 'hot_water', name: 'お湯', emoji: '♨️', desc: '温められた水。様々な用途に使える。', category: 'chemical' },
    'salt': { id: 'salt', name: '塩化ナトリウム', emoji: '🧂', desc: '海水を蒸発させて残った結晶。食塩。', category: 'chemical' },
    'energy': { id: 'energy', name: 'エネルギー', emoji: '⚡', desc: '自然の力。', category: 'phenomenon' },
    'stone': { id: 'stone', name: '石', emoji: '🪨', desc: '自然の中で見つかる硬い塊。', category: 'natural' },
    'stone_tool': { id: 'stone_tool', name: '石器', emoji: '🪓', desc: '石を加工して作った原始的な道具。', category: 'tool' },
    'stone_plate': { id: 'stone_plate', name: '石板', emoji: '🪨', desc: '平らに加工された石。文字を刻んだり、建材に使ったりできる。', category: 'material' },
    'calcium_carbonate': { id: 'calcium_carbonate', name: '炭酸カルシウム', emoji: '🦴', desc: '貝殻を砕いて作った白い粉末。', category: 'chemical' },
    'alcohol': { id: 'alcohol', name: 'エタノール', emoji: '🧪', desc: '純度の高いアルコール。よく燃える。', category: 'chemical' },
    'plant_ash': { id: 'plant_ash', name: '植物の灰', emoji: '🌑', desc: '植物を燃やしてできた灰。', category: 'chemical' },
    'frit': { id: 'frit', name: 'フリット', emoji: '💎', desc: '砂と植物の灰を混ぜて熱した、ガラスの原料。', category: 'chemical' },
    'glass': { id: 'glass', name: 'ガラス', emoji: '🍺', desc: 'フリットを高温で溶かして作った透明な物質。', category: 'chemical' },
    'charcoal': { id: 'charcoal', name: '木炭', emoji: '⬛', desc: '木材を乾留して作った高純度の炭。', category: 'chemical' },
    'wood_vinegar': { id: 'wood_vinegar', name: '木酢液', emoji: '🏺', desc: '木材の乾留時に出る液体成分。', category: 'chemical' },
    'salt_water': { id: 'salt_water', name: '食塩水', emoji: '🧪', desc: '水に塩を溶かしたもの。', category: 'chemical' },
    'battery': { id: 'battery', name: '電池', emoji: '🔋', desc: '食塩水に異なる2種類の電極を浸すことで、化学エネルギーを電気エネルギーに変換する装置。', category: 'chemical' },
    'electricity': { id: 'electricity', name: '電気', emoji: '🔌', desc: '電池から取り出された動力源。', category: 'phenomenon' },
    'sea_water_imitation': { id: 'sea_water_imitation', name: '人工海水', emoji: '🧪', desc: '水にお酢と塩を混ぜた実験的な液体。', category: 'chemical' },
    'shards': { id: 'shards', name: '土器の破片', emoji: '🧩', desc: '割れてしまった土器の破片。', category: 'chemical' },
    'iron_tool': { id: 'iron_tool', name: '鉄器', emoji: '⚔️', desc: '鉄を加工して作った頑丈な道具。', category: 'tool' },
    'glass_vessel': { id: 'glass_vessel', name: 'ガラス容器', emoji: '🍶', desc: 'ガラスと土器を組み合わせて作った高度な容器。', category: 'chemical' },
    'sodium_hydroxide': { id: 'sodium_hydroxide', name: '水酸化ナトリウム', emoji: '🧪', desc: '食塩水を電気分解して得られる強アルカリ性の物質。土器の破片を隔膜として使用。', category: 'chemical' },
    'sodium_hypochlorite': { id: 'sodium_hypochlorite', name: '次亜塩素酸ナトリウム', emoji: '🧪', desc: '食塩水を電気分解して得られる酸化剤。除菌などに使われる。', category: 'chemical' },
    'hydrogen': { id: 'hydrogen', name: '水素', emoji: '🎈', desc: '非常に軽く燃えやすい気体。電気分解などで発生する。', category: 'chemical' },
    'chlorine': { id: 'chlorine', name: '塩素', emoji: '💨', desc: '強い刺激臭のある黄緑色の気体。漂白や除菌に使われる。', category: 'chemical' },
    'oxygen': { id: 'oxygen', name: '酸素', emoji: '🌬️', desc: '生命の呼吸に不可欠な気体。水の電気分解などで得られる。', category: 'chemical' },
    'carbon_dioxide': { id: 'carbon_dioxide', name: '二酸化炭素', emoji: '☁️', desc: '木炭を燃焼させて発生する気体。温室効果ガスの一つ。', category: 'chemical' },
    'sulfur': { id: 'sulfur', name: '硫黄', emoji: '🟡', desc: '火山地帯で採れる黄色い結晶。火薬の原料になる。', category: 'natural' },
    'sulfur_dioxide': { id: 'sulfur_dioxide', name: '二酸化硫黄', emoji: '💨', desc: '硫黄を燃焼させて発生する刺激臭のある気体。', category: 'chemical' },
    'sulfurous_acid': { id: 'sulfurous_acid', name: '亜硫酸', emoji: '🧪', desc: '二酸化硫黄が水に溶けてできる酸性。漂白や防腐に使われる。', category: 'chemical' },
    'sulfuric_acid': { id: 'sulfuric_acid', name: '硫酸', emoji: '🧪', desc: '亜硫酸が酸化してできる強力な酸。', category: 'chemical' },
    'sodium_sulfate': { id: 'sodium_sulfate', name: '硫酸ナトリウム', emoji: '🧪', desc: '硫酸と水酸化ナトリウムが中和してできた塩。', category: 'chemical' },
    'sodium_hydrogen_sulfate': { id: 'sodium_hydrogen_sulfate', name: '硫酸水素ナトリウム', emoji: '🧪', desc: '硫酸と水酸化ナトリウムが1:1で反応してできた酸性塩。', category: 'chemical' },
    'hydrochloric_acid': { id: 'hydrochloric_acid', name: '塩酸', emoji: '🧪', desc: '塩と硫酸を反応させて得られる強力な酸。', category: 'chemical' },
    'aqua_regia': { id: 'aqua_regia', name: '王水', emoji: '👑', desc: '塩酸と硝酸を3:1で混ぜた最強の酸。金やプラチナすら溶かす。', category: 'chemical' },
    'alcohol_lamp': { id: 'alcohol_lamp', name: 'アルコールランプ', emoji: '🏮', desc: 'アルコールと紐、ガラス容器を組み合わせた実験用の加熱器具。', category: 'tool' },
    'sodium_sulfite': { id: 'sodium_sulfite', name: '亜硫酸ナトリウム', emoji: '🧪', desc: '亜硫酸と水酸化ナトリウムが反応してできた塩。還元剤として使われる。', category: 'chemical' },
    'graphite': { id: 'graphite', name: '黒鉛', emoji: '✏️', desc: '洞窟で採れる黒い鉱物。炭素の結晶。', category: 'natural' },
    'manganese_dioxide': { id: 'manganese_dioxide', name: '軟マンガン鉱', emoji: '🌑', desc: '洞窟で稀に採れる黒い鉱石。過マンガン酸カリウムの原料になる。', category: 'natural' },
    'potassium_hydroxide': { id: 'potassium_hydroxide', name: '水酸化カリウム', emoji: '🧪', desc: '灰と石灰から作られる強アルカリ性の物質。', category: 'chemical' },
    'potassium_permanganate': { id: 'potassium_permanganate', name: '過マンガン酸カリウム', emoji: '🟣', desc: '強力な酸化作用を持つ紫色の結晶。', category: 'chemical' },
    'graphene_oxide': { id: 'graphene_oxide', name: '酸化グラフェン', emoji: '🍂', desc: '黒鉛を強力に酸化させて得られるシート状の物質。', category: 'chemical' },
    'graphite_shards': { id: 'graphite_shards', name: '黒鉛の破片', emoji: '🧩', desc: '黒鉛を細かく砕いたもの。', category: 'chemical' },
    'pencil_lead': { id: 'pencil_lead', name: '鉛筆の芯', emoji: '✏️', desc: '黒鉛と粘土を混ぜて焼き固めたもの。', category: 'chemical' },
    'pencil': { id: 'pencil', name: '鉛筆', emoji: '✏️', desc: '文字を書くための道具。', category: 'tool' },
    'paper': { id: 'paper', name: '紙', emoji: '📄', desc: '植物の繊維を薬品で煮出して作った書きもの用のシート。', category: 'chemical' },
    'needle': { id: 'needle', name: '針', emoji: '🪡', desc: '鉄を細く加工した鋭い道具。', category: 'tool' },
    'compass_tool': { id: 'compass_tool', name: 'コンパス', emoji: '✏️', desc: '円を描くための道具。', category: 'tool' },
    'circle': { id: 'circle', name: '円', emoji: '⭕', desc: 'コンパスで描かれた完璧な曲線。', category: 'concept' },
    'calcium_oxide': { id: 'calcium_oxide', name: '酸化カルシウム', emoji: '⚪', desc: '生石灰。炭酸カルシウムを熱分解して得られる白い粉末。水と激しく反応して熱を出す。', category: 'chemical' },
    'calcium_hydroxide': { id: 'calcium_hydroxide', name: '水酸化カルシウム', emoji: '🧪', desc: '消石灰。酸化カルシウムに水を加えて作られる。石灰水の原料。', category: 'chemical' },
    'hand_warmer': { id: 'hand_warmer', name: 'ホッカイロ', emoji: '🔥', desc: '鉄の酸化反応を利用して熱を出す使い捨ての暖房具。', category: 'chemical' },
    'wheel': { id: 'wheel', name: '車輪', emoji: '🛞', desc: '円を木材から切り出して作った、移動や動力の伝達に不可欠な発明。', category: 'tool' },
    'water_wheel': { id: 'water_wheel', name: '水車', emoji: '🎡', desc: '流れる水の力を回転エネルギーに変える装置。', category: 'tool' },
    'lens': { id: 'lens', name: 'レンズ', emoji: '🔍', desc: 'ガラスを磨いて作った、光を屈折させる透明な円盤。', category: 'tool' },
    'telescope': { id: 'telescope', name: '望遠鏡', emoji: '🔭', desc: 'レンズを組み合わせて遠くのものを拡大して見る道具。', category: 'tool' },
    'microscope': { id: 'microscope', name: '顕微鏡', emoji: '🔬', desc: 'レンズを組み合わせて微小なものを拡大して見る道具。', category: 'tool' },
    'glasses': { id: 'glasses', name: 'メガネ', emoji: '👓', desc: '2つのレンズを組み合わせた視力矯正器具。視界がクリアになる。', category: 'tool' },
    'cup': { id: 'cup', name: 'コップ', emoji: '🥃', desc: '水を注いだガラスの器。喉を潤すのにちょうどいい。', category: 'chemical' },
    'wine_glass': { id: 'wine_glass', name: 'ワイングラス', emoji: '🍷', desc: 'ワインを注いだ贅沢なグラス。', category: 'chemical' },
    'nitrogen': { id: 'nitrogen', name: '窒素', emoji: '💨', desc: '空気の主成分である不活性な気体。', category: 'chemical' },
    'nitrogen_monoxide': { id: 'nitrogen_monoxide', name: '一酸化窒素', emoji: '💨', desc: '無色の気体。アーク放電や、アンモニアをプラチナ触媒で酸化させることで得られる。', category: 'chemical' },
    'nitrogen_dioxide': { id: 'nitrogen_dioxide', name: '二酸化窒素', emoji: '💨', desc: '一酸化窒素がさらに酸化してできる赤褐色の気体。', category: 'chemical' },
    'nitric_acid': { id: 'nitric_acid', name: '硝酸', emoji: '🧪', desc: '二酸化窒素を水に溶かしてできる強力な酸。', category: 'chemical' },
    'potassium_nitrate': { id: 'potassium_nitrate', name: '硝酸カリウム', emoji: '🧪', desc: '水酸化カリウムと硝酸が中和してできた塩。火薬の原料。', category: 'chemical' },
    'black_powder': { id: 'black_powder', name: '黒色火薬', emoji: '💥', desc: '硝酸カリウム、硫黄、木炭を混ぜて作った爆発性の粉末。', category: 'chemical' },
    'copper_sulfate': { id: 'copper_sulfate', name: '硫酸銅', emoji: '💎', desc: '洞窟で採れる美しい青色の結晶。電気分解や実験に広く使われる。', category: 'natural' },
    'iron_sulfate': { id: 'iron_sulfate', name: '硫酸鉄', emoji: '🟢', desc: '淡緑色の結晶。鉄と硫酸銅の置換反応などで得られる。', category: 'chemical' },
    'iron_sulfide': { id: 'iron_sulfide', name: '硫化鉄', emoji: '🌑', desc: '鉄と硫黄を反応させて作った黒い固形物。', category: 'chemical' },
    'hydrogen_sulfide': { id: 'hydrogen_sulfide', name: '硫化水素', emoji: '💨', desc: '腐った卵のような臭いがする有毒な気体。硫化鉄と塩酸から発生する。', category: 'chemical' },
    'iron_chloride': { id: 'iron_chloride', name: '塩化鉄', emoji: '🧪', desc: '鉄と塩酸が反応してできる物質。', category: 'chemical' },
    'coal': { id: 'coal', name: '石炭', emoji: '🪨', desc: '太古の植物が地中で変化してできた可燃性の岩石。', category: 'natural' },
    'coal_gas': { id: 'coal_gas', name: '石炭ガス', emoji: '💨', desc: '石炭の乾留時に発生する可燃性の気体。都市ガスの原料。', category: 'chemical' },
    'coal_tar': { id: 'coal_tar', name: 'コールタール', emoji: '🏺', desc: '石炭の乾留時に出る黒い粘り気のある液体。染料や薬品の原料。', category: 'chemical' },
    'coke': { id: 'coke', name: 'コークス', emoji: '⬛', desc: '石炭を乾留して不純物を取り除いた高純度の炭素燃料。強力な火力を持つ。', category: 'chemical' },
    'bamboo_powder': { id: 'bamboo_powder', name: '竹の粉末', emoji: '🎋', desc: '竹を石器で細かく砕いた粉末。', category: 'chemical' },
    'bamboo_filament': { id: 'bamboo_filament', name: '竹のフィラメント', emoji: '🧶', desc: '竹の粉末を薬品で処理して作った、電球のフィラメントに適した炭素繊維。', category: 'chemical' },
    'rubber': { id: 'rubber', name: '天然ゴム', emoji: '🧴', desc: '植物の樹脂を熱して作った弾力性のある素材。密閉性に優れる。', category: 'chemical' },
    'piston': { id: 'piston', name: 'ピストン', emoji: '⚙️', desc: '木材と鉄を精密に加工した、往復運動を行うための機構パーツ。', category: 'tool' },
    'mercury': { id: 'mercury', name: '水銀', emoji: '💧', desc: '常温で液体の重い金属。真空の発見や温度計に使われた。', category: 'natural' },
    'vacuum_pump': { id: 'vacuum_pump', name: '真空ポンプ', emoji: '💨', desc: 'ピストンとゴムを使って容器内の空気を排出し、真空を作る道具。', category: 'tool' },
    'vacuum_apparatus': { id: 'vacuum_apparatus', name: '真空装置', emoji: '🌌', desc: '空気が完全に取り除かれた空間を作り出す装置。', category: 'tool' },
    'boiler': { id: 'boiler', name: 'ボイラー', emoji: '♨️', desc: '水を加熱して高圧の蒸気を蓄える頑丈な装置。', category: 'tool' },
    'steam_engine': { id: 'steam_engine', name: '蒸気機関', emoji: '⚙️', desc: '蒸気の力を運動エネルギーに変える熱機関。', category: 'tool' },
    'rail': { id: 'rail', name: 'レール', emoji: '🛤️', desc: '鉄の道と木製の枕木で作られた軌道。', category: 'tool' },
    'locomotive': { id: 'locomotive', name: '蒸気機関車', emoji: '🚂', desc: '蒸気の力で線路上を自走する巨大な輸送機械。', category: 'tool' },
    'vulcanized_rubber': { id: 'vulcanized_rubber', name: '加硫ゴム', emoji: '🟡', desc: '天然ゴムに硫黄を加えて熱し、弾性と耐久性を高めた実用的なゴム。', category: 'chemical' },
    'wheel_hub': { id: 'wheel_hub', name: 'ホイール', emoji: '🎡', desc: '鉄で補強された車輪の中核パーツ。', category: 'tool' },
    'tread': { id: 'tread', name: 'トレッド', emoji: '⚙️', desc: '加硫ゴムに炭素（木炭）を混ぜて強度を高めたタイヤの接地部。', category: 'tool' },
    'tire': { id: 'tire', name: 'タイヤ', emoji: '🛞', desc: 'トレッドとホイールを組み合わせた、衝撃吸収とグリップ力に優れた車輪。', category: 'tool' },
    'rubber_tube': { id: 'rubber_tube', name: 'ゴムチューブ', emoji: '⚙️', desc: 'しなやかで弾力のあるゴム製の管。気体や液体の輸送に便利。', category: 'tool' },
    'galena': { id: 'galena', name: '方鉛鉱', emoji: '🌑', desc: '鉛を含む黒っぽい鉱石。鉛の原料。', category: 'natural' },
    'sphalerite': { id: 'sphalerite', name: '閃亜鉛鉱', emoji: '🌑', desc: '亜鉛を含む鉱石。真鍮などの原料。', category: 'natural' },
    'lead_oxide': { id: 'lead_oxide', name: '酸化鉛', emoji: '🧪', desc: '方鉛鉱を焼いてできた粉末。', category: 'chemical' },
    'lead': { id: 'lead', name: '鉛', emoji: '⛓️', desc: '柔らかく重い金属。加工しやすく、古くから使われている。', category: 'chemical' },
    'zinc_oxide': { id: 'zinc_oxide', name: '酸化亜鉛', emoji: '🧪', desc: '閃亜鉛鉱を焼いてできた白い粉末。亜鉛華。', category: 'chemical' },
    'zinc_sulfate': { id: 'zinc_sulfate', name: '硫酸亜鉛', emoji: '🧪', desc: '酸化亜鉛を硫酸に溶かしてできる塩。', category: 'chemical' },
    'zinc': { id: 'zinc', name: '亜鉛', emoji: '⛓️', desc: '青みがかった白色の金属。電池の電極やメッキに使われる。', category: 'chemical' },
    'lightning': { id: 'lightning', name: '雷', emoji: '⚡', desc: '雲から放たれる巨大な電気エネルギー。', category: 'phenomenon' },
    'lacquer': { id: 'lacquer', name: '漆', emoji: '🏺', desc: '漆の木から採れる天然の樹脂。塗料や接着剤として使われる。', category: 'natural' },
    'enameled_wire': { id: 'enameled_wire', name: 'エナメル線', emoji: '🧵', desc: '銅線に漆を塗って絶縁したもの。コイルの材料になる。', category: 'chemical' },
    'magnet': { id: 'magnet', name: '磁石', emoji: '🧲', desc: '鉄にエナメル線を巻き、雷の強力な電気を流して作った永久磁石。', category: 'tool' },
    'copper_disk': { id: 'copper_disk', name: '銅の円盤', emoji: '💿', desc: '銅を車輪の形に加工した円盤。発電機の部品になる。', category: 'chemical' },
    'generator': { id: 'generator', name: '発電機', emoji: '⚙️', desc: '磁石と回転する銅の円盤を組み合わせ、運動エネルギーを電気に変える装置。', category: 'tool' },
    'coil': { id: 'coil', name: 'コイル', emoji: '🌀', desc: '鉄芯にエナメル線を巻き付けたもの。電磁誘導や電磁石の基礎パーツ。', category: 'tool' },
    'electromagnet': { id: 'electromagnet', name: '電磁石', emoji: '🧲', desc: 'コイルに電気を流すことで磁力を持たせた装置。電気を切ると磁力が消える。', category: 'tool' },
    'manganese_monoxide': { id: 'manganese_monoxide', name: '一酸化マンガン', emoji: '🧪', desc: '軟マンガン鉱を炭素で還元して得られる緑色の粉末。', category: 'chemical' },
    'nickel_catalyst': { id: 'nickel_catalyst', name: 'ニッケル触媒', emoji: '🌑', desc: '微粉末状のニッケル。水素化反応などを促進する。', category: 'part' },
    'sabatier_reactor': { id: 'sabatier_reactor', name: 'サバティエ反応炉', emoji: '⚛️', desc: '二酸化炭素と水素からメタンを作る装置。宇宙での燃料生成に重要。', category: 'device' },
    'methane': { id: 'methane', name: 'メタン', emoji: '🔥', desc: '最も単純な炭化水素。天然ガスの主成分で、燃料になる。', category: 'chemical' },
    'hydrogen_cyanide': { id: 'hydrogen_cyanide', name: 'シアン化水素', emoji: '☠️', desc: 'アンドルッソフ法で合成される猛毒の気体。青酸。工業原料として重要。', category: 'chemical' },
    'sodium_cyanide': { id: 'sodium_cyanide', name: 'シアン化ナトリウム', emoji: '💀', desc: '青酸ソーダ。金の製錬（青化法）に使われる。取り扱い注意。', category: 'chemical' },
    'tea_leaf': { id: 'tea_leaf', name: '茶葉', emoji: '🍃', desc: '香り高い葉。加工の方法で緑茶にも紅茶にもなる。', category: 'natural' },
    'black_tea_leaf': { id: 'black_tea_leaf', name: '発酵した茶葉', emoji: '🍂', desc: '酸化発酵させた茶葉。紅茶の原料。', category: 'natural' },
    'green_tea': { id: 'green_tea', name: '緑茶', emoji: '🍵', desc: '茶葉にお湯を注いで出したお茶。心が落ち着く香り。', category: 'chemical' },
    'black_tea': { id: 'black_tea', name: '紅茶', emoji: '☕', desc: '発酵茶葉から抽出した赤いお茶。優雅な香りが特徴。', category: 'chemical' },
    'milk_tea': { id: 'milk_tea', name: 'ミルクティー', emoji: '🧋', desc: '紅茶にミルクと砂糖を入れた濃厚な飲み物。', category: 'chemical' },
    'flour': { id: 'flour', name: '小麦粉', emoji: '🌾', desc: '小麦を挽いて粉にしたもの。お菓子やパンの材料。', category: 'chemical' },
    'cookie': { id: 'cookie', name: 'クッキー', emoji: '🍪', desc: 'サクサクに焼き上げた素朴なお菓子。ティータイムのお供。', category: 'chemical' },
    'cake': { id: 'cake', name: 'ショートケーキ', emoji: '🍰', desc: 'ふわふわのスポンジにクリームとイチゴ（の代わり）を飾ったケーキ。', category: 'chemical' },
    'coffee_bean': { id: 'coffee_bean', name: 'コーヒー豆', emoji: '🫘', desc: '赤い果実の種。カフェインを含む。', category: 'natural' },
    'roasted_coffee_bean': { id: 'roasted_coffee_bean', name: '焙煎コーヒー豆', emoji: '🟤', desc: '火で煎って香ばしくなったコーヒー豆。', category: 'chemical' },
    'coffee_powder': { id: 'coffee_powder', name: 'コーヒー粉', emoji: '🤎', desc: '豆を挽いて粉状にしたもの。お湯を注げばコーヒーになる。', category: 'chemical' },
    'coffee': { id: 'coffee', name: 'ホットコーヒー', emoji: '☕', desc: '苦味と酸味のバランスが絶妙な黒い液体。眠気覚ましに。', category: 'chemical' },
    'latte': { id: 'latte', name: 'カフェラテ', emoji: '🥛', desc: 'エスプレッソにたっぷりのミルクを加えた優しい味。', category: 'chemical' },
    'iced_coffee': { id: 'iced_coffee', name: 'アイスコーヒー', emoji: '🧊', desc: '氷で急冷したコーヒー。暑い日に最適。', category: 'chemical' },
    'catapult': { id: 'catapult', name: 'カタパルト', emoji: '🏰', desc: '石を遠くへ飛ばす攻城兵器。てこの原理やねじりの力を利用する。', category: 'machine' },
    'pulley': { id: 'pulley', name: '滑車', emoji: '🏗️', desc: 'ロープと車輪を組み合わせた装置。重いものを小さな力で持ち上げられる。', category: 'tool' },
    'nickel': { id: 'nickel', name: 'ニッケル', emoji: '🔗', desc: '銀白色の金属。錆びにくく、メッキや合金に使われる。', category: 'chemical' },
    'nickel_oxide': { id: 'nickel_oxide', name: '酸化ニッケル', emoji: '🌑', desc: 'ニッケルの酸化物。ガラスに着色すると可視光を吸収する。', category: 'chemical' },
    'mercury_lamp': { id: 'mercury_lamp', name: '水銀灯', emoji: '💡', desc: '水銀蒸気中の放電を利用した強い光源。紫外線も多く含む。', category: 'tool' },
    'woods_glass': { id: 'woods_glass', name: 'ウッドガラス', emoji: '🔮', desc: '酸化ニッケルを含んだ濃い紫色のガラス。可視光をカットし紫外線だけを通す。', category: 'material' },
    'black_light': { id: 'black_light', name: 'ブラックライト', emoji: '🟣', desc: '紫外線を放出するライト。蛍光物質を光らせる。', category: 'tool' },
    'tamahagane': { id: 'tamahagane', name: '玉鋼', emoji: '💎', desc: 'たたら製鉄で作られた純度の高い鋼。日本刀の材料。', category: 'material' },
    'japanese_sword': { id: 'japanese_sword', name: '日本刀', emoji: '⚔️', desc: '玉鋼を鍛え上げた芸術的な美しさを持つ刀剣。折れず曲がらずよく切れる。', category: 'tool' },
    'chromium': { id: 'chromium', name: 'クロム', emoji: '🔗', desc: '銀白色の硬い金属。光沢があり、錆びにくい。', category: 'chemical' },
    'stainless_steel': { id: 'stainless_steel', name: 'ステンレス鋼', emoji: '🍴', desc: '鉄にクロムを混ぜて錆びにくくした合金。', category: 'material' },
    'knife': { id: 'knife', name: 'ナイフ', emoji: '🔪', desc: '物を切るための基本的な道具。料理や工作に必須。', category: 'tool' },
    'saw': { id: 'saw', name: 'ノコギリ', emoji: '🪚', desc: '木材を切断するためのギザギザの刃がついた道具。', category: 'tool' },
    'scissors': { id: 'scissors', name: 'ハサミ', emoji: '✂️', desc: '2枚の刃で挟んで切る道具。紙や布の加工に便利。', category: 'tool' },
    'scalpel': { id: 'scalpel', name: 'メス', emoji: '⚕️', desc: '医療用の極めて鋭利な刃物。ステンレス製で清潔。', category: 'tool' },
    'diamond': { id: 'diamond', name: 'ダイヤモンド', emoji: '💎', desc: 'もっとも硬い天然の鉱物。炭素の結晶。', category: 'natural' },
    'artificial_diamond': { id: 'artificial_diamond', name: '人工ダイヤモンド', emoji: '💠', desc: '高温高圧法（HPHT）で合成されたダイヤモンド。天然と化学組成は同じ。', category: 'chemical' },
    'hydraulic_press': { id: 'hydraulic_press', name: '油圧プレス機', emoji: '🚜', desc: 'パスカルの原理を利用して巨大な圧力を生み出す装置。', category: 'machine' },

    // Food & Ingredients
    'rice': { id: 'rice', name: '米', emoji: '🍚', desc: '日本人の主食。炊くとふっくら美味しい。', category: 'natural' },
    'egg': { id: 'egg', name: '卵', emoji: '🥚', desc: '栄養満点の食材。様々な料理に使われる。', category: 'natural' },
    'milk': { id: 'milk', name: '牛乳', emoji: '🥛', desc: 'カルシウムたっぷりの白い飲み物。', category: 'natural' },
    'vegetable': { id: 'vegetable', name: '野菜', emoji: '🥬', desc: '畑で採れた新鮮な野菜。ビタミン豊富。', category: 'natural' },
    'tomato': { id: 'tomato', name: 'トマト', emoji: '🍅', desc: '真っ赤な太陽の恵み。リコピンたっぷり。', category: 'natural' },
    'noodle': { id: 'noodle', name: '麺', emoji: '🍜', desc: '小麦粉を練って伸ばしたもの。', category: 'chemical' },

    // Seasonings
    'miso': { id: 'miso', name: '味噌', emoji: '🥣', desc: '大豆を発酵させた日本の調味料。', category: 'chemical' },
    'dashi': { id: 'dashi', name: '出汁', emoji: '🥘', desc: '魚や海藻から取った旨味のスープ。', category: 'chemical' },
    'mayonnaise': { id: 'mayonnaise', name: 'マヨネーズ', emoji: '🧴', desc: '卵と油と酢で作る濃厚なソース。', category: 'chemical' },
    'ketchup': { id: 'ketchup', name: 'ケチャップ', emoji: '🥫', desc: 'トマトを煮詰めた甘酸っぱいソース。', category: 'chemical' },

    // Dishes
    'sushi': { id: 'sushi', name: '寿司', emoji: '🍣', desc: '酢飯と新鮮な魚の芸術的な組み合わせ。', category: 'chemical' },
    'tempura': { id: 'tempura', name: '天ぷら', emoji: '🍤', desc: '食材に衣をつけてカラッと揚げた料理。', category: 'chemical' },
    'miso_soup': { id: 'miso_soup', name: '味噌汁', emoji: '🍲', desc: '出汁と味噌の香りが落ち着く日本のお吸い物。', category: 'chemical' },
    'steak': { id: 'steak', name: 'ステーキ', emoji: '🥩', desc: '肉を豪快に焼いたご馳走。', category: 'chemical' },
    'hamburger': { id: 'hamburger', name: 'ハンバーグ', emoji: '🍖', desc: '挽肉をこねて焼いた洋食の定番。', category: 'chemical' },
    'omelet': { id: 'omelet', name: 'オムレツ', emoji: '🍳', desc: 'ふわふわに焼いた卵料理。', category: 'chemical' },
    'ramen': { id: 'ramen', name: 'ラーメン', emoji: '🍜', desc: 'スープと麺が絡み合う国民食。', category: 'chemical' },
    'fried_rice': { id: 'fried_rice', name: 'チャーハン', emoji: '🥘', desc: '強火でパラパラに炒めたお米料理。', category: 'chemical' },
    'dumpling': { id: 'dumpling', name: '餃子', emoji: '🥟', desc: '肉と野菜を皮で包んで焼いた中華料理。', category: 'chemical' },
    'curry_rice': { id: 'curry_rice', name: 'カレーライス', emoji: '🍛', desc: 'スパイスの香りが食欲をそそる皆大好きカレー。', category: 'chemical' },
    'soldering_iron': { id: 'soldering_iron', name: 'はんだごて', emoji: '🖍️', desc: 'はんだを溶かして電子部品を接合する道具。熱くなるので注意。', category: 'tool' },

    // Electronics
    'resistor': { id: 'resistor', name: '抵抗器', emoji: '➖', desc: '電流の流れを制限する部品。', category: 'machine' },
    'capacitor': { id: 'capacitor', name: 'コンデンサ', emoji: '🔋', desc: '電気を蓄えたり放出したりする部品。', category: 'machine' },
    'diode': { id: 'diode', name: 'ダイオード', emoji: '▶️', desc: '電気を一方通行にする部品。', category: 'machine' },
    'led': { id: 'led', name: 'LED', emoji: '💡', desc: '電気を流すと光る半導体。省エネで長寿命。', category: 'machine' },
    'circuit_board': { id: 'circuit_board', name: '基板', emoji: '🟩', desc: '電子部品を配置するための板。銅の配線がある。', category: 'material' },
    'radio': { id: 'radio', name: 'ラジオ', emoji: '📻', desc: '電波を受信して音を出す装置。情報の架け橋。', category: 'machine' },

    // Submarine Tech
    'rutile': { id: 'rutile', name: 'ルチル', emoji: '🌑', desc: 'チタンを含む鉱石。金紅石。', category: 'natural' },
    'titanium': { id: 'titanium', name: 'チタン', emoji: '🛡️', desc: '軽くて強く、錆びない金属。潜水艦や航空機に使われる。', category: 'material' },
    'propeller': { id: 'propeller', name: 'スクリュー', emoji: '🌀', desc: '水をかいて推進力を生み出す羽根。', category: 'machine' },
    'periscope': { id: 'periscope', name: '潜望鏡', emoji: '🔭', desc: '海中から海上を偵察するための光学装置。', category: 'tool' },
    'submarine': { id: 'submarine', name: '潜水艦', emoji: '🚤', desc: '海中を自由に航行できる船。チタン製の船体で深海へ。', category: 'machine' },

    'manganese': { id: 'manganese', name: 'マンガン', emoji: '⛓️', desc: '硬くて脆い銀白色の金属。鉄の脱硫や合金の添加剤として重要。', category: 'chemical' },
    'calcium_chloride': { id: 'calcium_chloride', name: '塩化カルシウム', emoji: '🧪', desc: '炭酸カルシウムと塩酸の反応で得られる塩。除湿剤や凍結防止剤に使われる。', category: 'chemical' },
    'gold_ore': { id: 'gold_ore', name: '金鉱石', emoji: '🌑', desc: '金や銀を含んだ岩石。菱刈鉱山などの熱水鉱脈で見つかる。', category: 'natural' },
    'gold_dust': { id: 'gold_dust', name: '砂金', emoji: '✨', desc: '川底に溜まっていた重い金の粒。集めれば価値のある金属になる。', category: 'natural' },
    'gold': { id: 'gold', name: '金', emoji: '🥇', desc: '永遠に輝く貴金属の王。腐食せず、加工しやすい。', category: 'chemical' },
    'iron_sand': { id: 'iron_sand', name: '砂鉄', emoji: '✨', desc: '砂浜や川底に含まれる磁性を持つ鉄の粉末。たたら製鉄の原料になる。', category: 'natural' },
    'platinum': { id: 'platinum', name: 'プラチナ', emoji: '💍', desc: '川底で稀に見つかる非常に希少で安定した貴金属。白金。', category: 'natural' },
    'cinnabar': { id: 'cinnabar', name: '辰砂', emoji: '🌑', desc: '水銀を含む赤い鉱石。加熱すると水銀を取り出せる。', category: 'natural' },
    'molybdenum_trioxide': { id: 'molybdenum_trioxide', name: '三酸化モリブデン', emoji: '🤍', desc: '輝水鉛鉱を焙焼して得られる白い粉末。モリブデンの原料。', category: 'chemical' },
    'molybdenum_dioxide': { id: 'molybdenum_dioxide', name: '二酸化モリブデン', emoji: '🟤', desc: '三酸化モリブデンを水素還元して得られる茶褐色の粉末。', category: 'chemical' },
    'brine': { id: 'brine', name: '塩湖かん水', emoji: '🧂', desc: '塩分濃度が非常に高い水。リチウムなどの資源を含む。', category: 'natural' },
    'cassiterite': { id: 'cassiterite', name: 'スズ石', emoji: '🌑', desc: 'スズを含む鉱石。製錬するとスズを取り出せる。', category: 'natural' },
    'tin': { id: 'tin', name: 'スズ', emoji: '⛓️', desc: '低融点で加工しやすい銀白色の金属。青銅の材料やハンダに使われる。', category: 'chemical' },
    'potassium_carbonate': { id: 'potassium_carbonate', name: '炭酸カリウム', emoji: '🧪', desc: '水酸化カリウムが二酸化炭素を吸収してできた白い粉末。植物の灰の主成分でもある。', category: 'chemical' },
    'urine': { id: 'urine', name: '尿', emoji: '🏺', desc: '生物の排泄物。古くからリンや窒素の原料として利用されてきた。', category: 'natural' },
    'ammonia': { id: 'ammonia', name: 'アンモニア', emoji: '💨', desc: '強い刺激臭のある気体。尿の分解などで発生し、肥料や火薬の原料になる。', category: 'chemical' },
    'carbonated_water': { id: 'carbonated_water', name: '炭酸水', emoji: '🫧', desc: '二酸化炭素が水に溶け込んだもの。シュワシュワとはじける感覚がある。', category: 'chemical' },
    'sodium_bicarbonate': { id: 'sodium_bicarbonate', name: '炭酸水素ナトリウム', emoji: '🧪', desc: '重曹。炭酸水と水酸化ナトリウムの反応で得られる白い粉末。加熱すると二酸化炭素を放出する。', category: 'chemical' },
    'ammonium_chloride': { id: 'ammonium_chloride', name: '塩化アンモニウム', emoji: '🧪', desc: 'アンモニアと塩酸から得られる白い塩。ソルベー法の副産物。', category: 'chemical' },
    'sodium_carbonate': { id: 'sodium_carbonate', name: '炭酸ナトリウム', emoji: '🧪', desc: '炭酸ソーダ。石鹸やガラスの工業的原料。重曹を熱分解すると得られる。', category: 'chemical' },
    'light_bulb': { id: 'light_bulb', name: '電球', emoji: '💡', desc: '真空容器の中で竹のフィラメントを熱して光らせる装置。', category: 'tool' },
    'activated_carbon': { id: 'activated_carbon', name: '活性炭', emoji: '⬛', desc: '石炭を化学処理して吸着力を高めた炭。脱臭やろ液に使われる。', category: 'chemical' },
    'cylinder': { id: 'cylinder', name: 'シリンダー', emoji: '🧪', desc: '竹とガラスを組み合わせた筒状の部品。', category: 'tool' },
    'rod': { id: 'rod', name: '棒', emoji: '🪵', desc: 'シリンダーと合わせて使うための精密な木の棒。', category: 'tool' },
    'top': { id: 'top', name: 'コマ', emoji: '🎯', desc: '車輪と棒を組み合わせた回転する玩具。', category: 'tool' },
    'iron_pipe': { id: 'iron_pipe', name: '鉄パイプ', emoji: '🔧', desc: '棒を芯にして鉄を成形した管状のパーツ。', category: 'tool' },
    'bronze': { id: 'bronze', name: '青銅', emoji: '🥉', desc: '銅とスズの合金。硬くて腐食しにくい。', category: 'chemical' },
    'brass': { id: 'brass', name: '真鍮', emoji: '🎺', desc: '銅と亜鉛の合金。五円玉の材料。', category: 'chemical' },
    'solder': { id: 'solder', name: 'はんだ', emoji: '🧵', desc: '鉛とスズの合金。低融点で金属の接合に使われる。', category: 'chemical' },
    'noble_lead': { id: 'noble_lead', name: '貴鉛', emoji: '⛓️', desc: '銀を含んだ鉛。これを灰吹法で精錬することで純銀を取り出せる。', category: 'chemical' },
    'carbon_monoxide': { id: 'carbon_monoxide', name: '一酸化炭素', emoji: '💨', desc: '不完全燃焼で発生する無色の気体。強い還元力を持つ。', category: 'chemical' },
    'ash_cupel': { id: 'ash_cupel', name: '灰床', emoji: '🏺', desc: '植物の灰を押し固めて作った皿。灰吹法で鉛を吸収させるために使われる。', category: 'tool' },
    'silver': { id: 'silver', name: '銀', emoji: '🥈', desc: '美しい金属。非常に高い電気伝導性と光沢を持つ。', category: 'chemical' },
    'ammonium_nitrate': { id: 'ammonium_nitrate', name: '硝酸アンモニウム', emoji: '🧪', desc: '硝酸とアンモニアの中和で得られる塩。肥料や爆薬、寒冷剤として使われる。', category: 'chemical' },
    'cold_pack': { id: 'cold_pack', name: '瞬間冷却パック', emoji: '❄️', desc: '硝酸アンモニウムが水に溶ける際の吸熱反応を利用した冷却パック。', category: 'tool' },
    'sodium_acetate': { id: 'sodium_acetate', name: '酢酸ナトリウム', emoji: '🧪', desc: '酢酸と水酸化ナトリウムが反応してできる塩。', category: 'chemical' },
    'methane': { id: 'methane', name: 'メタン', emoji: '♨️', desc: '最も単純な構造の炭化水素。天然ガスの主成分で、非常に燃えやすい気体。', category: 'chemical' },
    'gas_burner': { id: 'gas_burner', name: 'ガスバーナー', emoji: '🔥', desc: 'メタンガスと空気を混合して高温の炎を出す加熱器具。ゴムチューブでガスを供給する。', category: 'tool' },
    'sundial': { id: 'sundial', name: '日時計', emoji: '🕰️', desc: '棒と日光を使って時間を計るための道具。', category: 'tool' },
    'triangle': { id: 'triangle', name: '三角形', emoji: '📐', desc: '3本の棒を組み合わせた基本の図形。', category: 'concept' },
    'quadrilateral': { id: 'quadrilateral', name: '四角形', emoji: '⬛', desc: '三角形を2つ組み合わせて作った図形。', category: 'concept' },
    'plank': { id: 'plank', name: '木の板', emoji: '🪵', desc: '四角形の枠組みに木材を張った板。', category: 'tool' },
    'compass': { id: 'compass', name: '方位磁針', emoji: '🧭', desc: '針と磁石を組み合わせた、方角を知るための道具基準。', category: 'tool' },
    'ketene': { id: 'ketene', name: 'ケテン', emoji: '💨', desc: '酢酸を熱分解して得られる反応性の高い気体。', category: 'chemical' },
    'acetic_anhydride': { id: 'acetic_anhydride', name: '無水酢酸', emoji: '🧪', desc: 'ケテンと酢酸を反応させて得られる化合物。', category: 'chemical' },
    'gold_plating': { id: 'gold_plating', name: '金メッキ', emoji: '✨', desc: '水銀と砂金を使ったアマルガム法によるメッキ。', category: 'tool' },
    'nital': { id: 'nital', name: 'ナイタール液', emoji: '🧪', desc: '硝酸とアルコールの混合液。金属の腐食検査に使われる。', category: 'chemical' },
    'sphere': { id: 'sphere', name: '球', emoji: '🔮', desc: '円を立体的にした完璧な形。', category: 'concept' },
    'iron_ball': { id: 'iron_ball', name: '鉄球', emoji: '🌑', desc: '鉄を完璧な球体に加工したもの。', category: 'tool' },
    'bearing': { id: 'bearing', name: 'ベアリング', emoji: '⚙️', desc: 'ホイールと鉄球を組み合わせた、回転抵抗を減らすための機構部品。', category: 'tool' },
    'sodium_silicate': { id: 'sodium_silicate', name: 'ケイ酸ナトリウム', emoji: '🧪', desc: '砂と炭酸ナトリウムを熱して作った、水ガラスの主成分。', category: 'chemical' },
    'hydrogel': { id: 'hydrogel', name: 'ヒドロゲル', emoji: '💧', desc: 'ケイ酸ナトリウムと硫酸を反応させて作った、水分を蓄えたゲル状物質。', category: 'chemical' },
    'xerogel': { id: 'xerogel', name: 'キセロゲル', emoji: '⚪', desc: 'ヒドロゲルを乾燥させて作った多孔質の固体。シリカゲルなど。', category: 'chemical' },
    'calcium_acetate': { id: 'calcium_acetate', name: '酢酸カルシウム', emoji: '🧪', desc: '炭酸カルシウムと酢酸の中和で得られる塩。', category: 'chemical' },
    'acetone': { id: 'acetone', name: 'アセトン', emoji: '🧪', desc: '酢酸カルシウムを乾留して得られる、特有の臭いを持つ溶剤。', category: 'chemical' },
    'chloroacetone': { id: 'chloroacetone', name: 'クロロアセトン', emoji: '💨', desc: 'アセトンと塩素を反応させて作った、強い催涙作用を持つ液体。', category: 'chemical' },
    'hourglass': { id: 'hourglass', name: '砂時計', emoji: '⏳', desc: 'ガラス容器2つと砂を組み合わせた、時間を計るための道具。', category: 'tool' },
    'starch': { id: 'starch', name: 'デンプン', emoji: '🍚', desc: '光合成によって植物の中に蓄えられた栄養分。', category: 'chemical' },
    'ozone': { id: 'ozone', name: 'オゾン', emoji: '🌫️', desc: '高電圧によって酸素原子が結びついてできた、特有の臭いを持つ気体。', category: 'chemical' },
    'vanadium_hot_metal': { id: 'vanadium_hot_metal', name: 'バナジウム含有溶銑', emoji: '💧', desc: 'バナジウムを含んだ溶けた鉄。', category: 'chemical' },
    'vanadium_slag': { id: 'vanadium_slag', name: 'バナジウムスラグ', emoji: '🌑', desc: '溶銑から不純物として分離されたバナジウム濃縮物。', category: 'chemical' },
    'sodium_metavanadate': { id: 'sodium_metavanadate', name: 'メタバナジン酸ナトリウム', emoji: '🧪', desc: 'スラグと炭酸ナトリウムを反応させて得られる水溶性の塩。', category: 'chemical' },
    'ammonium_metavanadate': { id: 'ammonium_metavanadate', name: 'メタバナジン酸アンモニウム', emoji: '🧪', desc: 'メタバナジン酸ナトリウムと塩化アンモニウムから沈殿させて得られる白い結晶。', category: 'chemical' },
    'vanadium_pentoxide': { id: 'vanadium_pentoxide', name: '五酸化バナジウム', emoji: '🟠', desc: 'メタバナジン酸アンモニウムを熱分解して得られるオレンジ色の酸化物。強力な触媒として使われる。', category: 'chemical' },
    'sulfur_trioxide': { id: 'sulfur_trioxide', name: '三酸化硫黄', emoji: '💨', desc: '二酸化硫黄を五酸化バナジウム触媒で酸化させて得られる気体。硫酸の原料。', category: 'chemical' },
    'fuming_sulfuric_acid': { id: 'fuming_sulfuric_acid', name: '発煙硫酸', emoji: '🧪', desc: '三酸化硫黄を濃硫酸に吸収させた、激しく白煙を上げる液体。', category: 'chemical' },
    'scheelite': { id: 'scheelite', name: '灰重石', emoji: '💎', desc: 'タングステンの主要な原料となる鉱石。強い紫外線を当てると青白く光る。', category: 'natural' },
    'tungstic_acid': { id: 'tungstic_acid', name: 'タングステン酸', emoji: '🧪', desc: '灰重石を塩酸で処理して得られる黄色い粉末。', category: 'chemical' },
    'ammonia_water': { id: 'ammonia_water', name: 'アンモニア水', emoji: '🧪', desc: 'アンモニアを水に溶かした弱アルカリ性の水溶液。', category: 'chemical' },
    'apt': { id: 'apt', name: 'パラタングステン酸アンモニウム', emoji: '🧪', desc: 'タングステン酸をアンモニア水に溶かして蒸発・乾固させた白い結晶。', category: 'chemical' },
    'tungsten_trioxide': { id: 'tungsten_trioxide', name: '酸化タングステン(VI)', emoji: '🟡', desc: 'APTを熱分解して得られる黄色い酸化物。', category: 'chemical' },
    'tungsten': { id: 'tungsten', name: 'タングステン', emoji: '⛓️', desc: '非常に高い融点を持つ高密度の金属。電球のフィラメントなどに使われる。', category: 'chemical' },
    'gear': { id: 'gear', name: '歯車', emoji: '⚙️', desc: 'ホイールに鉄を組み合わせて作った、回転力を効率よく伝えるための機械要素。', category: 'tool' },
    'hydroelectric_power': { id: 'hydroelectric_power', name: '水力発電', emoji: '⚡', desc: '水車、歯車、発電機を組み合わせ、水の流れから絶え間なく電気を生み出す仕組み。', category: 'concept' },
    'syringe': { id: 'syringe', name: '注射器', emoji: '💉', desc: '針、シリンダー、ピストンを組み合わせた、液体の注入や採取に使われる器具。', category: 'tool' },
    'magnesium_hydroxide': { id: 'magnesium_hydroxide', name: '水酸化マグネシウム', emoji: '🧪', desc: '海水中のマグネシウム分と石灰が反応して沈殿した白い泥状の物質。', category: 'chemical' },
    'magnesium_chloride': { id: 'magnesium_chloride', name: '塩化マグネシウム', emoji: '🧪', desc: '水酸化マグネシウムを塩酸に溶かして濃縮した塩。にがりの成分。', category: 'chemical' },
    'magnesium': { id: 'magnesium', name: 'マグネシウム', emoji: '⛓️', desc: '実用金属の中で最も軽い銀白色の金属。燃やすとまぶしい光を放つ。', category: 'chemical' },
    'hydrogen_chloride': { id: 'hydrogen_chloride', name: '塩化水素', emoji: '💨', desc: '刺激臭のある無色の気体。水に溶けると塩酸になる。', category: 'chemical' },
    'chlorosulfuric_acid': { id: 'chlorosulfuric_acid', name: 'クロロ硫酸', emoji: '🧪', desc: '発煙硫酸と塩化水素から作られる、極めて強い酸性を持つ液体。', category: 'chemical' },
    'struvite': { id: 'struvite', name: 'ストラバイト', emoji: '💎', desc: '尿由来の成分から生成される透明な結晶。肥料の原料。', category: 'chemical' },
    'magnesium_diphosphate': { id: 'magnesium_diphosphate', name: '二リン酸マグネシウム', emoji: '⚪', desc: 'ストラバイトを加熱して得られる白い粉末。', category: 'chemical' },
    'yellow_phosphorus': { id: 'yellow_phosphorus', name: '黄リン', emoji: '🔥', desc: '猛毒で非常に発火しやすい蝋状の物質。水中で保存する。', category: 'chemical' },
    'red_phosphorus': { id: 'red_phosphorus', name: '赤リン', emoji: '🔴', desc: '黄リンを空気を断って加熱した物質。マッチの側薬に使われる。', category: 'chemical' },
    'phosphoric_acid': { id: 'phosphoric_acid', name: 'リン酸', emoji: '🧪', desc: 'ストラバイトを硫酸で分解して得られる酸。肥料や食品添加物に使われる。', category: 'chemical' },
    'magnesium_sulfate': { id: 'magnesium_sulfate', name: '硫酸マグネシウム', emoji: '🧪', desc: 'エプソムソルト。ストラバイトの分解副産物。', category: 'chemical' },
    'ammonium_sulfate': { id: 'ammonium_sulfate', name: '硫酸アンモニウム', emoji: '🧪', desc: '硫安。代表的な窒素肥料。', category: 'chemical' },
    'vegetable_oil': { id: 'vegetable_oil', name: '植物油', emoji: '🌻', desc: '植物の種や実から絞った油。', category: 'chemical' },
    'soap': { id: 'soap', name: '石鹸', emoji: '🧼', desc: '油とアルカリで作った洗浄剤。汚れを落とす。', category: 'tool' },
    'glycerin': { id: 'glycerin', name: 'グリセリン', emoji: '🧪', desc: '石鹸の副産物として得られる甘い粘液。ダイナマイトの原料。', category: 'chemical' },
    'nitroglycerin': { id: 'nitroglycerin', name: 'ニトログリセリン', emoji: '💥', desc: 'グリセリンと硝酸から作られる、極めて不安定な爆発性液体。', category: 'chemical' },
    'dynamite': { id: 'dynamite', name: 'ダイナマイト', emoji: '🧨', desc: 'ニトログリセリンを土に染み込ませて安定化させた爆薬。ノーベルの発明。', category: 'tool' },
    'match': { id: 'match', name: 'マッチ', emoji: '🔥', desc: '赤リンを側薬に使った安全な着火具。', category: 'tool' },
    'silver_nitrate': { id: 'silver_nitrate', name: '硝酸銀', emoji: '🧪', desc: '銀を硝酸に溶かした無色の結晶。感光性がある。', category: 'chemical' },
    'silver_chloride': { id: 'silver_chloride', name: '塩化銀', emoji: '⚪', desc: '光に当たると黒く変色する性質を持つ白い粉末。写真の感光材。', category: 'chemical' },
    'camera': { id: 'camera', name: 'カメラ', emoji: '📷', desc: 'レンズと感光材を組み合わせ、一瞬の景色を切り取る装置。', category: 'tool' },
    'photo': { id: 'photo', name: '写真', emoji: '🖼️', desc: 'カメラで撮影された風景の記録。', category: 'tool' },
    'fireworks': { id: 'fireworks', name: '花火', emoji: '🎆', desc: '火薬と金属粉を混ぜて夜空を彩る美しい爆発。', category: 'tool' },
    'mirror': { id: 'mirror', name: '鏡', emoji: '🪞', desc: 'ガラスに銀メッキを施して作られた、姿を映す道具。銀鏡反応の応用。', category: 'tool' },
    'prism': { id: 'prism', name: 'プリズム', emoji: '🌈', desc: '光を屈折・分散させる透明な三角柱。虹を作り出せる。', category: 'tool' },
    'calcite': { id: 'calcite', name: '方解石', emoji: '⬜', desc: '透明度の高い炭酸カルシウムの結晶。複屈折という不思議な性質を持つ。', category: 'natural' },
    'polarizing_prism': { id: 'polarizing_prism', name: '偏光プリズム', emoji: '⬛', desc: '方解石を加工して作った、特定の方向の光だけを通すプリズム。', category: 'tool' },
    'crude_wood_alcohol': { id: 'crude_wood_alcohol', name: '粗木精', emoji: '🧪', desc: '木酢液を蒸留して得られる、メタノールを含む液体。', category: 'chemical' },
    'methanol': { id: 'methanol', name: 'メタノール', emoji: '🧪', desc: '酢酸カルシウムを乾留して得られる揮発性の液体。毒性が強い。', category: 'chemical' },
    'copper_oxide': { id: 'copper_oxide', name: '酸化銅(II)', emoji: '🌑', desc: '銅を加熱して酸化させた黒い粉末。', category: 'chemical' },
    'formaldehyde': { id: 'formaldehyde', name: 'ホルムアルデヒド', emoji: '💨', desc: 'メタノールを酸化させて作る刺激臭のある気体。', category: 'chemical' },
    'formalin': { id: 'formalin', name: 'ホルマリン', emoji: '🧪', desc: 'ホルムアルデヒドの水溶液。防腐剤や銀鏡反応の還元剤に使われる。', category: 'chemical' },
    'silver_nitrate_solution': { id: 'silver_nitrate_solution', name: '硝酸銀水溶液', emoji: '🧪', desc: '硝酸銀を水に溶かしたもの。', category: 'chemical' },
    'ammoniacal_silver_nitrate': { id: 'ammoniacal_silver_nitrate', name: 'アンモニア性硝酸銀水溶液', emoji: '🧪', desc: 'トレンス試薬。硝酸銀水溶液にアンモニア水を加えて錯イオンを作ったもの。', category: 'chemical' },
    'diatomaceous_earth': { id: 'diatomaceous_earth', name: '珪藻土', emoji: '🍂', desc: '太古の珪藻の殻が堆積してできた土。微細な穴がたくさんあり、液体をよく吸収する。', category: 'natural' },
    'fuse': { id: 'fuse', name: '導火線', emoji: '〰️', desc: '火薬を芯にして紐で巻いたもの。安全に点火するために使う。', category: 'tool' },
    'light_oil': { id: 'light_oil', name: '軽油', emoji: '⛽', desc: 'コールタールを蒸留して得られる軽い油。ベンゼンなどを含む。', category: 'chemical' },
    'middle_oil': { id: 'middle_oil', name: '中油', emoji: '🧪', desc: 'コールタールを蒸留して得られる油。ナフタレンやフェノールを含む。', category: 'chemical' },
    'heavy_oil': { id: 'heavy_oil', name: '重油', emoji: '🛢️', desc: 'コールタールを蒸留して得られる重い油。クレオソート油とも呼ばれる。', category: 'chemical' },
    'anthracene_oil': { id: 'anthracene_oil', name: 'アントラセン油', emoji: '🧪', desc: 'コールタールを蒸留して得られる高沸点の油。アントラセンを含む。', category: 'chemical' },
    'pitch': { id: 'pitch', name: 'ピッチ', emoji: '⬛', desc: 'コールタールの蒸留残渣。黒い固まり。電極や道路舗装に使われる。', category: 'chemical' },
    'steel': { id: 'steel', name: '鋼', emoji: '🔗', desc: '鉄に炭素を混ぜて強度を高めた合金。', category: 'material' },
    'spring': { id: 'spring', name: 'ばね', emoji: '🌀', desc: '弾力性のある鋼のコイル。機械要素として重要。', category: 'part' },
    'benzene': { id: 'benzene', name: 'ベンゼン', emoji: '⌬', desc: '軽油から抽出される、独特の芳香を持つ引火性の液体。化学工業の重要な原料。', category: 'chemical' },
    'phenoxide': { id: 'phenoxide', name: 'フェノキシド', emoji: '🧪', desc: '中油をアルカリ処理して得られる塩。酸で戻すとフェノールになる。', category: 'chemical' },
    'crude_naphthalene': { id: 'crude_naphthalene', name: '粗製ナフタレン', emoji: '⚪', desc: '中油から油分を除いた固形分。まだ不純物が多い。', category: 'chemical' },
    'crude_phenol': { id: 'crude_phenol', name: '粗フェノール', emoji: '🧪', desc: 'フェノキシドを酸で処理して油層として分離させたもの。', category: 'chemical' },
    'phenol': { id: 'phenol', name: 'フェノール', emoji: '🧪', desc: '特有の臭気を持つ殺菌作用のある物質。樹脂や染料の原料。', category: 'chemical' },
    'naphthalene': { id: 'naphthalene', name: 'ナフタレン', emoji: '⚪', desc: '防虫剤のにおいがする白い結晶。昇華性がある。', category: 'chemical' },
    'industrial_naphthalene': { id: 'industrial_naphthalene', name: '工業用ナフタレン', emoji: '🏭', desc: '高度に精製されたナフタレン。化学工業の基礎原料。', category: 'material' },
    'box': { id: 'box', name: '箱', emoji: '📦', desc: '四角形を組み合わせて作った丈夫な入れ物。物を運ぶのに便利。', category: 'tool' },
    'cart': { id: 'cart', name: '荷車', emoji: '🛒', desc: '箱にタイヤを取り付けた運搬具。重い物も楽に運べる。', category: 'tool' },
    'minecart': { id: 'minecart', name: 'トロッコ', emoji: '🚃', desc: 'レールの上を走るための車輪がついた運搬車。鉱山で活躍する。', category: 'tool' },
    'raw_brick': { id: 'raw_brick', name: '生レンガ', emoji: '🧱', desc: '混和材を型に入れて固めたもの。まだ脆い。', category: 'material' },
    'brick': { id: 'brick', name: 'レンガ', emoji: '🧱', desc: '生レンガを焼き固めた丈夫な建築資材。', category: 'material' },
    'crude_oil': { id: 'crude_oil', name: '原油', emoji: '🛢️', desc: '地下深くから採掘される黒い液体。精製すると様々な石油製品になる。', category: 'natural' },
    'motor': { id: 'motor', name: 'モーター', emoji: '🌀', desc: '電気エネルギーを回転運動に変える動力装置。', category: 'part' },
    'compressor': { id: 'compressor', name: '圧縮機', emoji: '⚙️', desc: '気体を高圧に圧縮して送り出すポンプ。冷凍サイクルの心臓部。', category: 'part' },
    'cooling_unit': { id: 'cooling_unit', name: '冷却ユニット', emoji: '❄️', desc: '圧縮機とパイプを組み合わせた冷却システム。気化熱を利用して熱を奪う。', category: 'part' },
    'refrigerator': { id: 'refrigerator', name: '冷蔵庫', emoji: '🧊', desc: 'アンモニア冷凍機を内蔵した保存箱。食料を腐らせずに長期保存できる。', category: 'tool' },
    'liquid_air': { id: 'liquid_air', name: '液体空気', emoji: '🫧', desc: '極低温まで冷却して液化した空気。窒素や酸素を分離できる。', category: 'chemical' },
    'ice': { id: 'ice', name: '氷', emoji: '🧊', desc: '水を凍らせたもの。冷たくて固い。', category: 'natural' },
    'anhydrous_sodium_acetate': { id: 'anhydrous_sodium_acetate', name: '無水酢酸ナトリウム', emoji: '🧪', desc: '酢酸ナトリウムを加熱して水分を飛ばしたもの。', category: 'chemical' },
    'glacial_acetic_acid': { id: 'glacial_acetic_acid', name: '氷酢酸', emoji: '🧪', desc: '純度の高い酢酸。寒冷時に凍って氷のように見える。刺激臭が強い。', category: 'chemical' },
    'iron_vessel': { id: 'iron_vessel', name: '鉄の容器', emoji: '🛢️', desc: '鉄板を加工して作った頑丈な容器。高圧にも耐えられる。', category: 'tool' },
    'distillation_tower': { id: 'distillation_tower', name: '蒸留塔', emoji: '🗼', desc: '沸点の違いを利用して混合物を精密に分離する巨大な装置。', category: 'tool' },
    'lp_gas': { id: 'lp_gas', name: 'LPガス', emoji: '🔥', desc: '液化石油ガス。原油から最初に分離される、家庭用燃料やタクシーに使われるガス。', category: 'chemical' },
    'gasoline': { id: 'gasoline', name: 'ガソリン', emoji: '⛽', desc: '自動車の燃料として広く使われる揮発性の高い燃料。', category: 'chemical' },
    'barium_sulfide': { id: 'barium_sulfide', name: '硫化バリウム', emoji: '🌑', desc: '重晶石を還元して得られる化合物。', category: 'chemical' },
    'barium_chloride': { id: 'barium_chloride', name: '塩化バリウム', emoji: '🧂', desc: 'バリウムの塩化物。毒性がある。', category: 'chemical' },
    'barium': { id: 'barium', name: 'バリウム', emoji: '⚪', desc: '銀白色のアルカリ土類金属。反応性が高い。', category: 'chemical' },
    'barite': { id: 'barite', name: '重晶石', emoji: '💎', desc: 'バリウムを含む非常に重い鉱石。X線の造影剤などに使われる。', category: 'natural' },
    'naphtha': { id: 'naphtha', name: 'ナフサ', emoji: '🧪', desc: '粗製ガソリン。プラスチックや化学繊維の原料になる重要な石油製品。', category: 'chemical' },
    'kerosene': { id: 'kerosene', name: '灯油', emoji: '🔥', desc: 'ストーブやジェット機の燃料に使われる油。', category: 'chemical' },
    'refined_brine': { id: 'refined_brine', name: '精製かん水', emoji: '💧', desc: '不純物を取り除いた塩湖かん水。リチウムの濃度が高まっている。', category: 'material' },
    'lithium_hydroxide': { id: 'lithium_hydroxide', name: '水酸化リチウム', emoji: '🧪', desc: 'リチウムの水酸化物。電池の電解質やグリースの原料になる。', category: 'chemical' },
    'lead_plate': { id: 'lead_plate', name: '鉛板', emoji: '⬜', desc: '鉛を薄く延ばした板。加工しやすく、電池の電極や遮蔽材に使われる。', category: 'part' },
    'plante_battery': { id: 'plante_battery', name: 'プランテ電池', emoji: '🔋', desc: '鉛板と希硫酸を用いた、世界初の再充電可能な二次電池（鉛蓄電池）。', category: 'tool' },
    'cloth': { id: 'cloth', name: '布', emoji: '🧶', desc: '繊維を織って作った布地。', category: 'material' },
    'sail': { id: 'sail', name: '帆', emoji: '⛵', desc: '風を受けて船を進めるための大きな布。', category: 'tool' },
    'screw': { id: 'screw', name: 'スクリュー', emoji: '🌀', desc: '水をかいて船を進めるための螺旋状の羽根車。', category: 'tool' },
    'marine_engine': { id: 'marine_engine', name: '船舶用機関', emoji: '⚙️', desc: 'スクリューと舵を組み込んだ、船を動かすための動力システム。', category: 'tool' },
    'steamship': { id: 'steamship', name: '機帆船', emoji: '🚢', desc: '蒸気機関と帆の両方で進む船。近代航海の幕開け。', category: 'tool' },
    'rubber_tree': { id: 'rubber_tree', name: 'ゴムノキ', emoji: '🌳', desc: '樹液からゴムが採れる熱帯の木。', category: 'natural' },
    'spice': { id: 'spice', name: '香辛料', emoji: '🌶️', desc: '東南アジア原産のスパイス。料理に風味を加える。', category: 'natural' },
    'corn': { id: 'corn', name: 'トウモロコシ', emoji: '🌽', desc: 'アメリカ大陸原産の穀物。甘くて栄養豊富。', category: 'natural' },
    'potato': { id: 'potato', name: 'ジャガイモ', emoji: '🥔', desc: '南米アンデス原産の芋。荒地でも育つ。', category: 'natural' },
    'cacao': { id: 'cacao', name: 'カカオ', emoji: '🍫', desc: '南米アマゾン原産の豆。チョコレートの原料。', category: 'natural' },

    // Chocolate & Sweets
    'sugar': { id: 'sugar', name: '砂糖', emoji: '🧂', desc: '甘い白い結晶。サトウキビなどから精製する。', category: 'material' },
    'milk': { id: 'milk', name: '牛乳', emoji: '🥛', desc: '牛から得られる栄養豊富な白い液体。', category: 'food' },
    'cacao_mass': { id: 'cacao_mass', name: 'カカオマス', emoji: '🟤', desc: 'カカオ豆を焙焼・粉砕したペースト。チョコの基本素材。', category: 'material' },
    'cacao_butter': { id: 'cacao_butter', name: 'カカオバター', emoji: '🧈', desc: 'カカオマスから搞り出した白い油脂。滑らかな口どけの秘密。', category: 'material' },
    'cocoa_powder': { id: 'cocoa_powder', name: 'ココアパウダー', emoji: '🥮', desc: 'カカオバターを掲った後に残る茶色の粉。', category: 'material' },
    'chocolate': { id: 'chocolate', name: 'チョコレート', emoji: '🍫', desc: '世界中で愛される甘くてほろ苦いお菓子。', category: 'food' },
    'hot_chocolate': { id: 'hot_chocolate', name: 'ホットチョコレート', emoji: '☕', desc: '温かいミルクにココアを溶かした飲み物。心も体も温まる。', category: 'food' },

    // Cola
    'carbonated_water': { id: 'carbonated_water', name: '炭酸水', emoji: '🫧', desc: '二酸化炭素が溶け込んだ水。シュワシュワする。', category: 'food' },
    'caramel': { id: 'caramel', name: 'カラメル', emoji: '🍮', desc: '砂糖を焦がして作った黒褐色のソース。香ばしい苦味がある。', category: 'food' },
    'cola_nut': { id: 'cola_nut', name: 'コーラナッツ', emoji: '🌰', desc: 'カフェインを含む熱帯の木の実。コーラの名前の由来。', category: 'natural' },
    'cola_syrup': { id: 'cola_syrup', name: 'コーラシロップ', emoji: '🏺', desc: 'スパイス、カラメル、コーラナッツを煮詰めた秘伝の原液。', category: 'food' },
    'cola': { id: 'cola', name: 'コーラ', emoji: '🥤', desc: '世界で最も有名な炭酸飲料。スカッと爽やか！', category: 'food' },

    'olive': { id: 'olive', name: 'オリーブ', emoji: '🫒', desc: '地中海沿岸で栽培される果実。オイルが採れる。', category: 'natural' },
    'fluorite': { id: 'fluorite', name: '蛍石', emoji: '💎', desc: '美しい結晶の鉱石。加熱すると発光する。フッ素の原料。', category: 'natural' },
    'raft': { id: 'raft', name: 'いかだ', emoji: '🪵', desc: '丸太を組んで作った原始的な船。', category: 'tool' },
    'yacht': { id: 'yacht', name: 'ヨット', emoji: '⛵', desc: '風を受けて進む軽快な船。', category: 'tool' },
    'asphalt': { id: 'asphalt', name: 'アスファルト', emoji: '🛣️', desc: '原油の蒸留残渣。道路の舗装や防水材に使われる黒い粘着物質。', category: 'material' },
    'latex': { id: 'latex', name: 'ラテックス', emoji: '🥛', desc: 'ゴムノキの樹液。白くて粘り気がある。', category: 'material' },
    'container': { id: 'container', name: 'コンテナ', emoji: '🟥', desc: '大量輸送用の規格化された箱。輸送革命。', category: 'tool' },
    'freight_train': { id: 'freight_train', name: '貨物列車', emoji: '🚂', desc: 'コンテナを積載した蒸気機関車。物流の主役。', category: 'tool' },

    // Fluorine Chemistry
    'hydrogen_fluoride': { id: 'hydrogen_fluoride', name: 'フッ化水素', emoji: '🧪', desc: '蛍石と硫酸から作られる無色の気体。非常に有毒。', category: 'chemical' },
    'hydrofluoric_acid': { id: 'hydrofluoric_acid', name: 'フッ化水素酸', emoji: '🧪', desc: 'フッ化水素の水溶液。ガラスを溶かす力を持つ。', category: 'chemical' },
    'ethylene': { id: 'ethylene', name: 'エチレン', emoji: '💨', desc: 'ナフサを熱分解して得られる気体。プラスチックの原料。', category: 'chemical' },
    'polyethylene': { id: 'polyethylene', name: 'ポリエチレン', emoji: '⚪', desc: 'エチレンを重合させたプラスチック。容器などに使われる。', category: 'material' },
    'plastic_container': { id: 'plastic_container', name: 'ポリ容器', emoji: '🧴', desc: 'ポリエチレンで作られた酸に強い容器。', category: 'tool' },
    'etched_glass': { id: 'etched_glass', name: 'すりガラス', emoji: '🌫️', desc: 'フッ化水素酸で表面を腐食させて不透明にしたガラス。', category: 'material' },
    'teflon': { id: 'teflon', name: 'テフロン', emoji: '🍳', desc: 'フッ素樹脂。熱に強く、物がくっつかない夢の素材。', category: 'material' },
    'frying_pan': { id: 'frying_pan', name: 'フライパン', emoji: '🍳', desc: 'テフロン加工された焦げ付かない調理器具。', category: 'tool' },

    // Nylon
    'cyclohexane': { id: 'cyclohexane', name: 'シクロヘキサン', emoji: '⌬', desc: 'ベンゼンに水素を付加した液体。ナイロンの原料。', category: 'chemical' },
    'adipic_acid': { id: 'adipic_acid', name: 'アジピン酸', emoji: '🧪', desc: 'シクロヘキサンを酸化して作る酸。酸味がある。', category: 'chemical' },
    'hexamethylenediamine': { id: 'hexamethylenediamine', name: 'ヘキサメチレンジアミン', emoji: '🧪', desc: 'アジピン酸とアンモニアから合成されるアミン。', category: 'chemical' },
    'nylon': { id: 'nylon', name: 'ナイロン', emoji: '🧵', desc: 'クモの糸より細く、鋼鉄より強い合成繊維。', category: 'material' },
    'stockings': { id: 'stockings', name: 'ストッキング', emoji: '👢', desc: 'ナイロンで作られた薄くて丈夫な靴下。女性のファッションを変えた。', category: 'tool' },
    'parachute': { id: 'parachute', name: 'パラシュート', emoji: '🪂', desc: 'ナイロン製の大きな布。空気抵抗を利用して安全に降下する。', category: 'tool' },

    // Penicillin
    'fish': { id: 'fish', name: '魚', emoji: '🐟', desc: '海や川を泳ぐ生き物。', category: 'natural' },
    'seaweed': { id: 'seaweed', name: '海藻', emoji: '🌿', desc: '海に生える藻類。寒天の原料。', category: 'natural' },
    'kelp_ash': { id: 'kelp_ash', name: '海藻灰', emoji: '🍂', desc: '海藻を焼いて作った灰。炭酸ナトリウムやヨウ素を含んでいる。', category: 'material' },
    'iodine': { id: 'iodine', name: 'ヨウ素', emoji: '🟣', desc: '海藻灰から抽出される紫黒色の結晶。消毒液の原料。', category: 'chemical' },
    'flour': { id: 'flour', name: '穀粉', emoji: '🌾', desc: '穀物を挽いて粉にしたもの。パンの原料。', category: 'material' },
    'bread': { id: 'bread', name: 'パン', emoji: '🍞', desc: '粉を練って焼いた食品。放置するとカビる。', category: 'chemical' },
    'moldy_bread': { id: 'moldy_bread', name: 'カビたパン', emoji: '🤢', desc: '青カビが生えてしまったパン。', category: 'natural' },
    'blue_mold': { id: 'blue_mold', name: '青カビ', emoji: '🦠', desc: 'パンや果物に生えるカビ。ペニシリンを作る。', category: 'natural' },
    'agar': { id: 'agar', name: '寒天', emoji: '🍮', desc: '海藻を煮て固めたもの。微生物の培養基になる。', category: 'material' },
    'petri_dish': { id: 'petri_dish', name: 'シャーレ', emoji: '🧫', desc: '寒天培地を入れたガラス皿。菌を培養する実験器具。', category: 'tool' },

    // Photography / Cinema
    'gelatin': { id: 'gelatin', name: 'ゼラチン', emoji: '🍮', desc: '動物の骨や皮から煮出したタンパク質。フィルムの感光剤を固定する。', category: 'material' },
    'bone': { id: 'bone', name: '骨', emoji: '🦴', desc: '魚や動物の骨。', category: 'natural' },
    'silver_bromide': { id: 'silver_bromide', name: '臭化銀', emoji: '🧪', desc: '銀と臭素の化合物。光に非常に敏感。', category: 'chemical' },
    'photographic_film': { id: 'photographic_film', name: 'フィルム', emoji: '🎞️', desc: 'セルロイドに感光剤を塗った透明なシート。', category: 'tool' },
    'developer': { id: 'developer', name: '現像液', emoji: '🧪', desc: '感光したフィルムから画像を浮かび上がらせる薬品。', category: 'chemical' },
    'exposed_film': { id: 'exposed_film', name: '撮影済フィルム', emoji: '🎞️', desc: '撮影して潜像が記録されたフィルム。まだ見えない。', category: 'tool' },
    'negative': { id: 'negative', name: 'ネガ', emoji: '🎞️', desc: '現像されたフィルム。明暗が反転している。', category: 'tool' },
    'movie_film': { id: 'movie_film', name: '映画フィルム', emoji: '🎥', desc: '長いフィルムに連続した写真を記録したもの。', category: 'tool' },
    'projector': { id: 'projector', name: '映写機', emoji: '📽️', desc: '強い光でフィルムの映像をスクリーンに投影する装置。', category: 'tool' },
    'cinema': { id: 'cinema', name: '映画', emoji: '🎬', desc: '動く写真。人々に夢と感動を与える娯楽。', category: 'tool' },

    // Sulfa Drug Intermediates
    'nitrobenzene': { id: 'nitrobenzene', name: 'ニトロベンゼン', emoji: '🟡', desc: '黄色い油状の液体。アーモンドのような匂いがする。', category: 'chemical' },
    'aniline': { id: 'aniline', name: 'アニリン', emoji: '🟤', desc: '特異臭のある液体。合成染料の原料。', category: 'chemical' },
    'acetanilide': { id: 'acetanilide', name: 'アセトアニリド', emoji: '⚪', desc: 'かつて解熱鎮痛剤として使われた白い結晶。アンチヘブリン。', category: 'chemical' },
    'p_asc': { id: 'p_asc', name: 'p-ASC', emoji: '🧪', desc: 'アセトアミノベンゼンスルホニルクロリド。サルファ剤合成の中間体。', category: 'chemical' },
    'p_asa': { id: 'p_asa', name: 'p-ASA', emoji: '🧪', desc: 'アセトアミノベンゼンスルホンアミド。サルファ剤合成の中間体。', category: 'chemical' },
    'sulfanilamide_hcl': { id: 'sulfanilamide_hcl', name: 'スルファニルアミド塩酸塩', emoji: '🧪', desc: 'これを中和すると薬になる。', category: 'chemical' },
    'sulfanilamide': { id: 'sulfanilamide', name: 'サルファ剤', emoji: '💊', desc: '世界初の合成抗菌薬（サルファニルアミド）。多くの命を救った。', category: 'chemical' },

    'ceramics': { id: 'ceramics', name: 'セラミックス', emoji: '🏺', desc: '高温で焼き固めた白い焼き物。耐熱性と絶縁性に優れる。', category: 'material' },

    // Automobile
    'spark_plug': { id: 'spark_plug', name: '点火プラグ', emoji: '🔌', desc: 'エンジン内部で火花を飛ばす点火装置。', category: 'part' },
    'engine': { id: 'engine', name: 'エンジン', emoji: '⚙️', desc: 'ガソリンの爆発力を回転に変える内燃機関。', category: 'part' },
    'chassis': { id: 'chassis', name: 'シャーシ', emoji: '🦴', desc: '車の骨格となる鋼鉄のフレーム。', category: 'part' },
    'car_body': { id: 'car_body', name: '車体', emoji: '🚙', desc: '居住空間となる車体。ガラスと布で快適。', category: 'part' },
    'drivetrain': { id: 'drivetrain', name: 'ドライブトレイン', emoji: '🏎️', desc: 'エンジンとタイヤを搭載した走行可能なシャーシ。', category: 'part' },
    'car': { id: 'car', name: '自動車', emoji: '🚗', desc: 'ガソリンで走る夢の乗り物。行動範囲が広がる。', category: 'tool' },

    // Pressure
    'iron_plate': { id: 'iron_plate', name: '鉄板', emoji: '🛡️', desc: '叩いて平らにした鉄の板。', category: 'material' },
    'pump': { id: 'pump', name: 'ポンプ', emoji: '⛽', desc: '気体や液体を吸い上げる装置。', category: 'tool' },
    'hydraulic_jack': { id: 'hydraulic_jack', name: '油圧ジャッキ', emoji: '🏗️', desc: '油の圧力で重いものを持ち上げる装置。', category: 'tool' },
    'hydraulic_pump': { id: 'hydraulic_pump', name: '油圧ポンプ', emoji: '⛽', desc: '高圧の油を送り出す強力なポンプ。', category: 'tool' },
    'press_machine': { id: 'press_machine', name: 'プレス機', emoji: '🗜️', desc: '数トンの圧力をかけて物質を変形させる装置。', category: 'tool' },

    // Acetylene
    'calcium_carbide': { id: 'calcium_carbide', name: 'カルシウムカーバイド', emoji: '🌑', desc: '生石灰とコークスを高温で反応させたもの。水と激しく反応する。', category: 'chemical' },
    'acetylene': { id: 'acetylene', name: 'アセチレン', emoji: '🔥', desc: '三重結合を持つ炭化水素。燃焼温度が非常に高い。', category: 'chemical' },
    'carbon_rod': { id: 'carbon_rod', name: '炭素棒', emoji: '📏', desc: '黒鉛で作られた電気を通す棒。', category: 'part' },
    'zinc_chloride': { id: 'zinc_chloride', name: '塩化亜鉛', emoji: '🧂', desc: '亜鉛と塩素の化合物。', category: 'chemical' },
    'zinc_chloride_solution': { id: 'zinc_chloride_solution', name: '塩化亜鉛水溶液', emoji: '🧪', desc: '塩化亜鉛を水に溶かしたもの。電解液になる。', category: 'chemical' },
    'manganese_sulfate': { id: 'manganese_sulfate', name: '硫酸マンガン', emoji: '🧪', desc: 'マンガンと硫酸から得られる塩。', category: 'chemical' },
    'manganese_sulfate_sulfuric_acid_solution': { id: 'manganese_sulfate_sulfuric_acid_solution', name: '硫酸マンガン含有硫酸溶液', emoji: '🧪', desc: 'マンガン電池の原料となる混合溶液。', category: 'chemical' },
    'electrolytic_manganese_dioxide': { id: 'electrolytic_manganese_dioxide', name: '電解二酸化マンガン', emoji: '🌑', desc: '電気分解によって得られた高純度の二酸化マンガン。', category: 'chemical' },
    'manganese_battery': { id: 'manganese_battery', name: 'マンガン電池', emoji: '🔋', desc: '亜鉛と二酸化マンガン、炭素棒などを使った乾電池。', category: 'tool' },
    'toilet': { id: 'toilet', name: '水洗トイレ', emoji: '🚽', desc: 'セラミックスと鉄パイプで作られた衛生的な設備。文明の象徴。', category: 'tool' },
    'mechanical_clock': { id: 'mechanical_clock', name: '機械式時計', emoji: '🕰️', desc: '歯車とばねを組み合わせた精密な時を刻む装置。', category: 'tool' },

    // South Africa & Rare Metals
    'chromite': { id: 'chromite', name: 'クロム鉄鉱', emoji: '🌑', desc: 'クロムを含む黒い鉱石。ステンレスの原料。', category: 'natural' },
    'pentlandite': { id: 'pentlandite', name: 'ペントランド鉱', emoji: '🌑', desc: 'ニッケルと鉄を含む金色の鉱石。', category: 'natural' },
    'molybdenite': { id: 'molybdenite', name: '輝水鉛鉱', emoji: '🌑', desc: 'モリブデンを含む柔らかい鉱石。黒鉛に似ている。', category: 'natural' },
    'pyrochlore': { id: 'pyrochlore', name: 'パイクロア', emoji: '🟤', desc: 'ニオブを含む茶色の鉱石。アラシャとも呼ばれる。', category: 'natural' },
    'rutile': { id: 'rutile', name: 'ルチル', emoji: '✨', desc: 'チタンを含む金色の針状結晶。', category: 'natural' },
    'copper_ore': { id: 'copper_ore', name: '輝銅鉱', emoji: '🟤', desc: '銅を含む岩石。緑青色の斑点が見られることが多い。', category: 'natural' },
    'copper_oxide_1': { id: 'copper_oxide_1', name: '酸化銅(I)', emoji: '🔴', desc: '赤色の粉末。輝銅鉱を焙焼して得られる。', category: 'chemical' },

    'nickel': { id: 'nickel', name: 'ニッケル', emoji: '⛓️', desc: '熱や腐食に強い銀白色の金属。', category: 'chemical' },
    'chromium': { id: 'chromium', name: 'クロム', emoji: '🛡️', desc: '非常に硬く、錆びにくい金属。メッキや合金に使われる。', category: 'chemical' },
    'molybdenum': { id: 'molybdenum', name: 'モリブデン', emoji: '⛓️', desc: '融点が非常に高い金属。', category: 'chemical' },
    'nickel_matte': { id: 'nickel_matte', name: 'ニッケルマット', emoji: '🌑', desc: 'ニッケル精錬の中間生成物。硫化ニッケルが主成分。', category: 'chemical' },
    'slag': { id: 'slag', name: 'スラグ', emoji: '🪨', desc: '製錬の過程で出る不要なカス。鉱滓。', category: 'waste' },
    'nickel_chloride': { id: 'nickel_chloride', name: '塩化ニッケル', emoji: '🧪', desc: 'ニッケルマットを塩素処理して得られる塩。', category: 'chemical' },

    // Advanced Timekeeping
    'pendulum': { id: 'pendulum', name: '振り子', emoji: '⛓️', desc: '重りと紐を組み合わせた、一定の周期で揺れる機構。', category: 'part' },
    'pendulum_clock': { id: 'pendulum_clock', name: '振り子時計', emoji: '🕰️', desc: '振り子の等時性を利用した高精度な置時計。', category: 'tool' },
    'chronometer': { id: 'chronometer', name: 'クロノメーター', emoji: '⌚', desc: '船の揺れや温度変化に影響されない、極めて精密な機械式時計。', category: 'tool' },
    'quartz_clock': { id: 'quartz_clock', name: 'クォーツ時計', emoji: '⌚', desc: '水晶の振動を利用した、現代の標準的な時計。', category: 'tool' },
    'atomic_clock': { id: 'atomic_clock', name: '原子時計', emoji: '⚛️', desc: '原子の振動を基準にした、宇宙で最も正確な時計の一つ。', category: 'tool' },
    'molybdenum_trioxide': { id: 'molybdenum_trioxide', name: '三酸化モリブデン', emoji: '⚪', desc: 'モリブデンを焙焼して得られる粉末。', category: 'chemical' },
    'niobium': { id: 'niobium', name: 'ニオブ', emoji: '⛓️', desc: '極低温で超伝導を示す金属。', category: 'chemical' },
    'titanium': { id: 'titanium', name: 'チタン', emoji: '🛡️', desc: '軽くて強く、錆びない夢の金属。加工は難しい。', category: 'chemical' },

    'ferrochrome': { id: 'ferrochrome', name: 'フェロクロム', emoji: '🧱', desc: '鉄とクロムの合金。ステンレス鋼の原料。', category: 'chemical' },
    'ferronickel': { id: 'ferronickel', name: 'フェロニッケル', emoji: '🧱', desc: '鉄とニッケルの合金。', category: 'chemical' },
    'titanium_sponge': { id: 'titanium_sponge', name: 'スポンジチタン', emoji: '🧽', desc: '精錬された多孔質のチタン。これを溶かしてインゴットにする。', category: 'chemical' },
    'titanium_tetrachloride': { id: 'titanium_tetrachloride', name: '四塩化チタン', emoji: '💨', desc: 'チタン精錬の中間体。発煙性の液体。', category: 'chemical' },
    'stainless_steel': { id: 'stainless_steel', name: 'ステンレス鋼', emoji: '🍴', desc: '鉄、クロム、ニッケルの合金。錆びにくい。', category: 'chemical' },
    'inconel': { id: 'inconel', name: 'インコネル', emoji: '🚀', desc: 'ニッケルをベースにした超耐熱合金。ロケットエンジンなどに使われる。', category: 'chemical' },
    'super_conductor': { id: 'super_conductor', name: '超伝導電磁石', emoji: '🧲', desc: 'ニオブチタン合金などを使った、電気抵抗ゼロの強力な磁石。', category: 'tool' },

    // New Metals: Cobalt, Neodymium, Indium
    'cobalt_ore': { id: 'cobalt_ore', name: 'コバルト輝鉱', emoji: '🔵', desc: 'オーストラリアで採れるコバルトを含む鉱石。ヒ素を含んでいる。', category: 'natural' },
    'cobalt_oxide': { id: 'cobalt_oxide', name: '酸化コバルト', emoji: '🌑', desc: 'コバルト輝鉱を焙焼して得られる黒い粉末。', category: 'chemical' },
    'arsenic_trioxide': { id: 'arsenic_trioxide', name: '三酸化二ヒ素', emoji: '💀', desc: '亜砒酸。猛毒の白い粉末。取扱注意。', category: 'chemical' },
    'cobalt_sulfate': { id: 'cobalt_sulfate', name: '硫酸コバルト', emoji: '🔴', desc: '酸化コバルトを硫酸に溶かして得られる赤色の塩。', category: 'chemical' },
    'cobalt': { id: 'cobalt', name: 'コバルト', emoji: '🔵', desc: '青い光沢の金属。リチウムイオン電池の正極材や耐熱合金に不可欠。', category: 'chemical' },
    'monazite': { id: 'monazite', name: 'モナズ石', emoji: '🟠', desc: 'レアアース（希土類）を含む黄褐色の鉱石。', category: 'natural' },
    'neodymium': { id: 'neodymium', name: 'ネオジム', emoji: '🧲', desc: '最強の永久磁石を作れる希土類元素。モーターやスピーカーに使われる。', category: 'chemical' },
    'indium': { id: 'indium', name: 'インジウム', emoji: '📱', desc: '透明導電膜（ITO）の原料。タッチパネルに不可欠な希少金属。', category: 'chemical' },

    // Aluminum & Silicon (Rocket Materials)
    'bauxite': { id: 'bauxite', name: 'ボーキサイト', emoji: '🟤', desc: 'アルミニウムの原料となる赤褐色の鉱石。', category: 'natural' },
    'alumina': { id: 'alumina', name: 'アルミナ', emoji: '⚪', desc: '酸化アルミニウム。白い粉末。これを電気分解してアルミを作る。', category: 'chemical' },
    'aluminum': { id: 'aluminum', name: 'アルミニウム', emoji: '🪙', desc: '軽くて加工しやすい銀白色の金属。', category: 'chemical' },
    'duralumin': { id: 'duralumin', name: 'ジュラルミン', emoji: '✈️', desc: 'アルミニウムに銅などを混ぜて強度を高めた合金。航空機やロケットの材料。', category: 'material' },

    'silicon': { id: 'silicon', name: '金属ケイ素', emoji: '⬛', desc: 'シリコン。半導体の基板となる物質。', category: 'chemical' },
    'quartz_crucible': { id: 'quartz_crucible', name: '石英ルツボ', emoji: '🥣', desc: '高純度の石英ガラスで作られた耐熱容器。シリコン単結晶の育成に使われる。', category: 'tool' },
    'silicon_ingot': { id: 'silicon_ingot', name: 'シリコンインゴット', emoji: '💎', desc: '石英ルツボから引き上げられた巨大な単結晶シリコンの塊。', category: 'material' },
    'wafer': { id: 'wafer', name: 'シリコンウェハー', emoji: '💿', desc: '高純度のシリコンを薄くスライスした円盤。', category: 'part' },
    'ic': { id: 'ic', name: '集積回路', emoji: '💾', desc: '多数の素子を組み込んだ電子回路。コンピュータの頭脳。', category: 'part' },
    'computer': { id: 'computer', name: 'コンピュータ', emoji: '💻', desc: '高度な計算を行う電子計算機。ロケットの制御に不可欠。', category: 'tool' },

    // Rocket Parts
    'rocket_engine': { id: 'rocket_engine', name: 'ロケットエンジン', emoji: '🔥', desc: 'インコネル製の超高性能エンジン。推力を生み出す心臓部。', category: 'part' },
    'rocket_body': { id: 'rocket_body', name: 'ロケットの機体', emoji: '🚀', desc: 'ジュラルミンとチタンで作られた軽量かつ頑丈な機体。', category: 'part' },
    'rocket': { id: 'rocket', name: 'ロケット', emoji: '🚀', desc: '宇宙へ飛び立つための乗り物。人類の夢の結晶。', category: 'tool' },

    // Infrastructure
    // Infrastructure
    'cement': { id: 'cement', name: 'セメント', emoji: '🪨', desc: '石灰石と粘土を焼成して粉砕した粉末。水と反応して固まる。', category: 'material' },
    'concrete': { id: 'concrete', name: 'コンクリート', emoji: '⬜', desc: 'セメント、水、砂、石を混ぜて固めた、現代建築の基礎となる人造石。', category: 'material' },
    'launch_pad': { id: 'launch_pad', name: '発射台', emoji: '🏗️', desc: 'ロケットを垂直に固定し、安全に打ち上げるための巨大な施設。', category: 'tool' },

    // Space Suit
    'airtight_fabric': { id: 'airtight_fabric', name: '気密布', emoji: '🥋', desc: 'ナイロンにテフロン加工を施した、空気を通さない特殊な布。', category: 'material' },
    'space_helmet': { id: 'space_helmet', name: '宇宙ヘルメット', emoji: '🪖', desc: '金メッキされたバイザーを持つ、頑丈なヘルメット。紫外線をカットする。', category: 'part' },
    'plss': { id: 'plss', name: '生命維持装置', emoji: '🎒', desc: '酸素供給や体温調節を行う、宇宙服の心臓部バックパック。', category: 'part' },
    'spacesuit': { id: 'spacesuit', name: '宇宙服', emoji: '🧑‍🚀', desc: '過酷な宇宙環境でも活動できるように作られた船外活動ユニット。', category: 'tool' },

    // Smartphone Materials
    'lithium_ore': { id: 'lithium_ore', name: 'リチウム鉱石(α)', emoji: '🪨', desc: 'リチウムを含む鉱石（α-スポジュメン）。非常に硬く、そのままでは成分を取り出せない。', category: 'natural' },
    'lithium_ore_beta': { id: 'lithium_ore_beta', name: 'リチウム鉱石(β)', emoji: '🧱', desc: '加熱処理して結晶構造が変化した鉱石（β-スポジュメン）。酸に溶けやすくなっている。', category: 'chemical' },
    'lithium_sulfate': { id: 'lithium_sulfate', name: '硫酸リチウム', emoji: '🧪', desc: 'リチウム鉱石(β)を硫酸で処理して得られる水溶性の塩。', category: 'chemical' },
    'lithium_carbonate': { id: 'lithium_carbonate', name: '炭酸リチウム', emoji: '🧂', desc: 'リチウム鉱石を精製して得られる粉末。電池の原料。', category: 'chemical' },
    'lithium_ion_battery': { id: 'lithium_ion_battery', name: 'リチウムイオン電池', emoji: '🔋', desc: '小型で大容量の充電式電池。モバイル機器の必需品。', category: 'part' },
    'lcd': { id: 'lcd', name: '液晶ディスプレイ', emoji: '🖥️', desc: '電圧で光の透過を制御する薄型画面。', category: 'part' },
    'touch_panel': { id: 'touch_panel', name: 'タッチパネル', emoji: '📱', desc: '指の動きを感知する入力装置と画面を一体化したもの。', category: 'part' },
    'soc': { id: 'soc', name: 'SoC', emoji: '🔲', desc: 'CPUや通信機能などを1つのチップにまとめた超小型コンピュータ。', category: 'part' },
    'smartphone': { id: 'smartphone', name: 'スマートフォン', emoji: '📱', desc: '世界中の知識とつながる魔法の板。', category: 'tool' },

    // Internet & AI
    'optical_fiber': { id: 'optical_fiber', name: '光ファイバー', emoji: '〰️', desc: '石英ガラスで作られた、光信号を通す極細の線。高速通信の動脈。', category: 'part' },
    'server': { id: 'server', name: 'サーバー', emoji: '🗄️', desc: '膨大なデータを保存・処理する高性能コンピュータ。', category: 'tool' },
    'satellite': { id: 'satellite', name: '人工衛星', emoji: '🛰️', desc: '地球の軌道上から通信や観測を行う装置。ロケットで打ち上げる。', category: 'tool' },
    'internet': { id: 'internet', name: 'インターネット', emoji: '🌐', desc: '世界中のコンピュータがつながった巨大なネットワーク。情報の海。', category: 'concept' },
    'ai': { id: 'ai', name: '人工知能', emoji: '🧠', desc: '学習し、考えるコンピュータプログラム。人類のパートナー。', category: 'concept' },

    // Next-Gen Energy
    'solar_panel': { id: 'solar_panel', name: 'ソーラーパネル', emoji: '☀️', desc: 'シリコンを使って太陽の光を直接電気に変える板。', category: 'part' },
    'solar_power_plant': { id: 'solar_power_plant', name: 'メガソーラー', emoji: '🔋', desc: '大量のソーラーパネルを並べた発電所。クリーンエネルギー。', category: 'tool' },


    // Maglev
    'liquid_nitrogen': { id: 'liquid_nitrogen', name: '液体窒素', emoji: '❄️', desc: '極低温の液体。超伝導状態を作る冷却材。', category: 'chemical' },
    'guideway': { id: 'guideway', name: 'ガイドウェイ', emoji: '🛤️', desc: '推進用コイルが埋め込まれたリニアモーターカーの軌道。', category: 'tool' },
    'maglev_train': { id: 'maglev_train', name: 'リニアモーターカー', emoji: '🚅', desc: '超伝導磁石の力で浮上・走行する夢の超特急。', category: 'tool' },

    // AC Evolution
    'copper': { id: 'copper', name: '銅', emoji: '🥉', desc: '赤みを帯びた金属。電気や熱をよく通す。', category: 'chemical' },
    'copper_pipe': { id: 'copper_pipe', name: '銅管', emoji: '🧶', desc: '銅で作られたパイプ。熱交換器などに使われる。', category: 'part' },
    'heat_exchanger': { id: 'heat_exchanger', name: '熱交換器', emoji: '⚙️', desc: '温度の異なる流体の間で熱を移動させる装置。', category: 'part' },
    'refrigerant': { id: 'refrigerant', name: '冷媒', emoji: '❄️', desc: '熱を運ぶための流体。蒸発と凝縮を繰り返して熱を移動させる。', category: 'chemical' },
    'heat_pump': { id: 'heat_pump', name: 'ヒートポンプ', emoji: '🔄', desc: '空気中の熱を集めて移動させる高効率なシステム。', category: 'part' },
    'air_conditioner': { id: 'air_conditioner', name: 'エアコン', emoji: '🍃', desc: 'ヒートポンプを使って室内の温度を調節する快適な家電。', category: 'tool' },
    'peltier_element': { id: 'peltier_element', name: 'ペルチェ素子', emoji: '⏹️', desc: '電気を流すと片面が冷え、もう片面が熱くなる半導体素子。', category: 'part' },
    'wearable_thermo_device': { id: 'wearable_thermo_device', name: '着るクーラー', emoji: '👕', desc: 'ペルチェ素子を利用して体を直接冷やすウェアラブルデバイス。', category: 'tool' },

    // Food Tech
    'tin_plate': { id: 'tin_plate', name: 'ブリキ板', emoji: '⬜', desc: '鉄板にスズをメッキしたもの。錆びにくい。', category: 'material' },
    'can': { id: 'can', name: '空き缶', emoji: '🥫', desc: 'ブリキで作られた保存容器。', category: 'tool' },
    'canned_food': { id: 'canned_food', name: '缶詰', emoji: '🥘', desc: '加熱殺菌して密閉した保存食。長期保存が可能。', category: 'tool' },
    'soybean': { id: 'soybean', name: '大豆', emoji: '🫘', desc: '畑の肉と呼ばれる栄養豊富な豆。', category: 'natural' },
    'soy_sauce': { id: 'soy_sauce', name: '醤油', emoji: '🍶', desc: '大豆を発酵させて作った万能調味料。', category: 'chemical' },
    'retort_pouch': { id: 'retort_pouch', name: 'レトルトパウチ', emoji: '🧧', desc: 'アルミとプラスチックを張り合わせた、耐熱・遮光性の袋。', category: 'part' },
    'retort_food': { id: 'retort_food', name: 'レトルト食品', emoji: '🍛', desc: '加圧加熱殺菌された便利な食品。宇宙にも持って行ける。', category: 'tool' },
    'culture_medium': { id: 'culture_medium', name: '培養液', emoji: '🧪', desc: '細胞を育てるための栄養を含んだ液体。', category: 'chemical' },
    'cultured_meat': { id: 'cultured_meat', name: '培養肉', emoji: '🥩', desc: '動物の細胞を培養して作った人工肉。未来の食糧。', category: 'tool' },
    'meat': { id: 'meat', name: '肉', emoji: '🍖', desc: '動物の肉。貴重なタンパク源。', category: 'natural' },
    'freeze_dryer': { id: 'freeze_dryer', name: 'フリーズドライ機', emoji: '🥶', desc: '食品を凍らせて真空中で乾燥させる装置。', category: 'tool' },
    'space_food': { id: 'space_food', name: '宇宙食', emoji: '🚀', desc: '究極の保存技術で作られた食事。水で戻して食べる。', category: 'tool' },

    // Agriculture & Crops
    'plow': { id: 'plow', name: '鋤（すき）', emoji: '🚜', desc: '土を耕すための道具。農業の基本。', category: 'tool' },
    'tractor': { id: 'tractor', name: 'トラクター', emoji: '🚜', desc: '強力なエンジンで大地を耕す農業機械。', category: 'tool' },
    'fertilizer': { id: 'fertilizer', name: '肥料', emoji: '💩', desc: '植物の成長を促進する栄養素。', category: 'material' },
    'pesticide': { id: 'pesticide', name: '農薬', emoji: '☠️', desc: '害虫や病気を防ぐ薬品。使いすぎには注意。', category: 'chemical' },
    'wheat': { id: 'wheat', name: '小麦', emoji: '🌾', desc: 'パンや麺の原料となる穀物。人類を支える主食。', category: 'food' },
    'corn': { id: 'corn', name: 'トウモロコシ', emoji: '🌽', desc: '世界三大穀物の一つ。食用、飼料、工業原料と万能。', category: 'food' },
    'potato': { id: 'potato', name: 'ジャガイモ', emoji: '🥔', desc: 'デンプンが豊富な地下茎。冷涼な土地でも育つ。', category: 'food' },
    'bread': { id: 'bread', name: 'パン', emoji: '🍞', desc: '小麦粉を練って焼いたもの。ふっくらと香ばしい。', category: 'food' },
    'potato_chips': { id: 'potato_chips', name: 'ポテトチップス', emoji: '🍟', desc: '薄切りジャガイモを揚げたスナック。止まらない美味しさ。', category: 'food' },
    'biofuel': { id: 'biofuel', name: 'バイオ燃料', emoji: '⛽', desc: '植物から作られた燃料。カーボンニュートラルなエネルギー。', category: 'fuel' },

    'uranium_ore': { id: 'uranium_ore', name: 'ウラン鉱石', emoji: '☢️', desc: '放射性物質を含む鉱石。原子力の燃料になる。', category: 'natural' },
    'nuclear_fuel': { id: 'nuclear_fuel', name: '核燃料', emoji: '☢️', desc: 'ウランを濃縮・加工した燃料。莫大なエネルギーを秘めている。', category: 'chemical' },
    'nuclear_power_plant': { id: 'nuclear_power_plant', name: '原子力発電所', emoji: '🏭', desc: '核分裂の熱エネルギーを利用して巨大な電力を生み出す施設。', category: 'tool' },

    // Haber-Bosch Process
    'iron_catalyst': { id: 'iron_catalyst', name: '鉄触媒', emoji: '⬛', desc: '高純度の酸化鉄。ハーバー・ボッシュ法の心臓部。', category: 'chemical' },
    'high_pressure_reactor': { id: 'high_pressure_reactor', name: '高圧反応器', emoji: '🏭', desc: '200気圧以上の超高圧に耐える合成炉。', category: 'tool' },
    'fuel_cell': { id: 'fuel_cell', name: '燃料電池', emoji: '🔋', desc: '水素と酸素を反応させて電気を取り出すクリーンな発電装置。白金触媒が必要。', category: 'tool' },

    // Vehicle Evolution
    'propeller': { id: 'propeller', name: 'プロペラ', emoji: '߷', desc: '回転して推力を生み出す羽根。', category: 'part' },
    'hot_air_balloon': { id: 'hot_air_balloon', name: '熱気球', emoji: '🎈', desc: '熱した空気の浮力で空を飛ぶ乗り物。', category: 'tool' },
    'airship': { id: 'airship', name: '飛行船', emoji: '🚀', desc: '水素ガスなどを詰めた巨大な風船で飛ぶ船。', category: 'tool' },
    'airplane': { id: 'airplane', name: '飛行機', emoji: '🛩️', desc: '翼とプロペラで空を飛ぶ機械。ライト兄弟の夢。', category: 'tool' },
    'titanium_plate': { id: 'titanium_plate', name: 'チタン板', emoji: '🛡️', desc: '軽くて強いチタンを加工した板。航空機のエンジンなどに使われる。', category: 'material' },
    'jet_engine': { id: 'jet_engine', name: 'ジェットエンジン', emoji: '🔥', desc: '空気を圧縮・燃焼させて超高速のガスを噴出する強力なエンジン。', category: 'part' },
    'jet_plane': { id: 'jet_plane', name: 'ジェット機', emoji: '✈️', desc: '音速に近い速度で空を飛ぶ現代の航空機。', category: 'tool' },
    'lithium_ion_battery': { id: 'lithium_ion_battery', name: 'リチウムイオン電池', emoji: '🔋', desc: '軽量で大容量な蓄電池。モバイル機器やEVの主力電源。', category: 'part' },
    'electric_car': { id: 'electric_car', name: '電気自動車', emoji: '🚙', desc: '電気モーターで走る静かでクリーンな車。EV。', category: 'tool' },
    'drone': { id: 'drone', name: 'ドローン', emoji: '🚁', desc: '遠隔操作で飛ぶ無人航空機。空撮や点検に活躍。', category: 'tool' },

    'bicycle': { id: 'bicycle', name: '自転車', emoji: '🚲', desc: '自分の力で進む二輪車。環境に優しい移動手段。', category: 'tool' },
    'motorcycle': { id: 'motorcycle', name: 'オートバイ', emoji: '🏍️', desc: 'エンジンを搭載した二輪車。風を切って走る。', category: 'tool' },
    'iron_pipe': { id: 'iron_pipe', name: '鉄パイプ', emoji: '🔧', desc: '鉄で作られた丈夫な管。自転車のフレームなどに使われる。', category: 'part' },

    // Communication & Broadcast
    'vacuum_tube': { id: 'vacuum_tube', name: '真空管', emoji: '💡', desc: '電気信号を増幅したり整えたりするガラスの電子部品。', category: 'part' },
    'diode': { id: 'diode', name: 'ダイオード', emoji: '⏯️', desc: '電流を一方通行にする半導体素子。整流作用を持つ。', category: 'part' },
    'transistor': { id: 'transistor', name: 'トランジスタ', emoji: '🐜', desc: '電気信号を増幅・スイッチングする半導体素子。電子時代の主役。', category: 'part' },
    'radio': { id: 'radio', name: 'ラジオ', emoji: '📻', desc: '電波を受信して音声を流す装置。情報の架け橋。', category: 'tool' },
    'telephone': { id: 'telephone', name: '電話機', emoji: '☎️', desc: '遠く離れた人と声で会話できる発明。', category: 'tool' },
    'crt': { id: 'crt', name: 'ブラウン管', emoji: '📺', desc: '電子ビームで画面を光らせる装置。テレビの心臓部。', category: 'part' },
    'television': { id: 'television', name: 'テレビ', emoji: '📺', desc: '動く映像と音声を映し出す魔法の箱。', category: 'tool' },

    // FAX & Image Transmission
    'photodiode': { id: 'photodiode', name: 'フォトダイオード', emoji: '🔅', desc: '光を電気に変える半導体。光センサーの基本。', category: 'part' },
    'scanner': { id: 'scanner', name: 'スキャナー', emoji: '📸', desc: '写真や書類を読み取ってデジタルデータにする装置。', category: 'tool' },
    'printer': { id: 'printer', name: 'プリンター', emoji: '🖨️', desc: 'デジタルデータを紙に印刷する装置。', category: 'tool' },
    'modem': { id: 'modem', name: 'モデム', emoji: '📼', desc: 'ピーヒョロロ。デジタル信号を電話回線の音に変換する装置。', category: 'part' },
    'fax_machine': { id: 'fax_machine', name: 'FAX', emoji: '📠', desc: '電話回線を使って書類を送受信する装置。ファクシミリ。', category: 'tool' },

    // Printing Technology
    'ink': { id: 'ink', name: 'インク', emoji: '⚫', desc: '煤や染料を溶かした液体。文字や絵を描くのに使う。', category: 'material' },
    'movable_type': { id: 'movable_type', name: '活字', emoji: '🔣', desc: '鉛合金で作られた文字の型。活版印刷の基礎。', category: 'part' },
    'printing_press': { id: 'printing_press', name: '印刷機', emoji: '📰', desc: '活字を使って紙にインクを転写する機械。知識の革命。', category: 'tool' },
    'typewriter': { id: 'typewriter', name: 'タイプライター', emoji: '⌨️', desc: 'キーを押して活字を紙に打ち付ける機械。カチャカチャッ、チーン！', category: 'tool' },
    'toner': { id: 'toner', name: 'トナー', emoji: '⚫', desc: 'レーザープリンター用の微細なプラスチック粉末インク。', category: 'material' },
    'laser_printer': { id: 'laser_printer', name: 'レーザープリンター', emoji: '🖨️', desc: 'レーザーと静電気を使って高速に印刷するオフィス用プリンター。', category: 'tool' },

    // Recording Media & Optoelectronics
    'record': { id: 'record', name: 'レコード', emoji: '⚫', desc: '塩化ビニルの円盤に溝を刻んで音を記録したもの。アナログの暖かみ。', category: 'tool' },
    'phonograph': { id: 'phonograph', name: '蓄音機', emoji: '📢', desc: 'エジソンが発明した、音を記録・再生する装置。', category: 'tool' },
    'cassette_tape': { id: 'cassette_tape', name: 'カセットテープ', emoji: '📼', desc: '磁気テープに音を記録するメディア。A面とB面がある。', category: 'tool' },

    'laser': { id: 'laser', name: 'レーザー', emoji: '🔴', desc: '誘導放出によって増幅された光。CDの読み取りや加工に使われる。', category: 'part' },
    'polycarbonate': { id: 'polycarbonate', name: 'ポリカーボネート', emoji: '💿', desc: '透明で衝撃に強いプラスチック。CDやDVDの基盤。', category: 'material' },
    'compact_disc': { id: 'compact_disc', name: 'CD', emoji: '💿', desc: 'デジタル情報を記録した光沢のある円盤。音楽業界を変えた。', category: 'tool' },
    'cd_player': { id: 'cd_player', name: 'CDプレーヤー', emoji: '🎧', desc: 'レーザーを使ってCDの音楽を再生する装置。', category: 'tool' },
    'dvd': { id: 'dvd', name: 'DVD', emoji: '📀', desc: 'CDよりも高密度な光ディスク。映画一本がまるごと入る。', category: 'tool' },
    'blu_ray': { id: 'blu_ray', name: 'ブルーレイ', emoji: '🔵', desc: '青色レーザーを使った大容量ディスク。ハイビジョン映像も余裕。', category: 'tool' },

    // Radio Tech Components
    'capacitor': { id: 'capacitor', name: 'コンデンサ', emoji: '🔋', desc: '電気を一時的に蓄える部品。電子回路の基本要素。', category: 'part' },
    'antenna': { id: 'antenna', name: 'アンテナ', emoji: '📡', desc: '電波を送信・受信するための金属の棒や皿。', category: 'part' },
    'microphone': { id: 'microphone', name: 'マイク', emoji: '🎤', desc: '音の振動を電気信号に変換する装置。', category: 'part' },
    'speaker': { id: 'speaker', name: 'スピーカー', emoji: '🔈', desc: '電気信号を空気の振動（音）に戻す装置。', category: 'part' },

    'wafer': { id: 'wafer', name: 'ウェハー', emoji: '💿', desc: 'シリコンの単結晶を薄くスライスした円盤。半導体の基板。', category: 'material' },
    'ic': { id: 'ic', name: '集積回路', emoji: '💾', desc: '多数の素子を一つのチップに収めた電子回路。', category: 'part' },

    // Radio Tech Products
    'transceiver': { id: 'transceiver', name: 'トランシーバー', emoji: '📟', desc: '無線で会話できる携帯無線機。もしもし。', category: 'tool' },
    'radar': { id: 'radar', name: 'レーダー', emoji: '🟢', desc: '電波の反射を利用して、遠くの物体の位置を知る装置。', category: 'tool' },
    'microwave_oven': { id: 'microwave_oven', name: '電子レンジ', emoji: '🍱', desc: '強力なマイクロ波で水の分子を振動させ、食品を温める調理器具。', category: 'tool' },

    // Radar & Sonar Technology
    'magnetron': { id: 'magnetron', name: 'マグネトロン', emoji: '🔘', desc: '強力なマイクロ波を発生させる真空管。レーダーと電子レンジの心臓部。', category: 'part' },
    'radome': { id: 'radome', name: 'レードーム', emoji: '⚪', desc: 'レーダーアンテナを保護するドーム状のカバー。電波を通す素材で作られる。', category: 'part' },
    'hydrophone': { id: 'hydrophone', name: '水中マイク', emoji: '🎤', desc: '水中の音を拾うためのマイク。ソナーの耳。', category: 'part' },
    'sonar': { id: 'sonar', name: 'ソナー', emoji: '💠', desc: '音波の反射を利用して水中の物体を探知する装置。潜水艦の目。', category: 'tool' },
    'fish_finder': { id: 'fish_finder', name: '魚群探知機', emoji: '🐟', desc: 'ソナーを使って魚の群れを見つける漁業用機器。', category: 'tool' },
    'depth_sounder': { id: 'depth_sounder', name: '深度計', emoji: '⚓', desc: '音波で水深を測る装置。航海の安全に欠かせない。', category: 'tool' },
    'ultrasound': { id: 'ultrasound', name: '超音波診断装置', emoji: '🫀', desc: '高周波の音波で体内を映像化する医療機器。胎児の画像など。', category: 'tool' },

    // Modern Medicine
    'penicillin': { id: 'penicillin', name: 'ペニシリン', emoji: '💊', desc: 'カビから発見された世界初の抗生物質。多くの命を救った。', category: 'chemical' },
    'vaccine': { id: 'vaccine', name: 'ワクチン', emoji: '💉', desc: '弱毒化した病原体を使って免疫を作る予防薬。', category: 'chemical' },
    'scalpel': { id: 'scalpel', name: 'メス', emoji: '🩸', desc: '精密な外科手術用のナイフ。', category: 'tool' },
    'anesthesia': { id: 'anesthesia', name: '麻酔', emoji: '💤', desc: '痛みを感じさせずに手術を可能にする薬剤。', category: 'chemical' },
    'ct_scanner': { id: 'ct_scanner', name: 'CTスキャナー', emoji: '🎯', desc: 'X線を使って体の断面画像を撮影する装置。', category: 'tool' },
    'endoscope': { id: 'endoscope', name: '内視鏡', emoji: '🔭', desc: '体内を直接観察できるカメラ付きチューブ。', category: 'tool' },
    'defibrillator': { id: 'defibrillator', name: '除細動器', emoji: '⚡', desc: '心臓に電気ショックを与えて正常なリズムに戻す装置。AED。', category: 'tool' },
    'artificial_heart': { id: 'artificial_heart', name: '人工心臓', emoji: '❤️', desc: '心臓の代わりに血液を送るポンプ。移植までの橋渡し。', category: 'tool' },
    'dialysis_machine': { id: 'dialysis_machine', name: '人工透析機', emoji: '🫀', desc: '腘臓の代わりに血液をろ過する装置。', category: 'tool' },
    'dna_sequencer': { id: 'dna_sequencer', name: 'DNAシーケンサー', emoji: '🧬', desc: '遺伝子の塩基配列を読み取る装置。個別化医療の基盤。', category: 'tool' },

    'stethoscope': { id: 'stethoscope', name: '聴診器', emoji: '❤️‍🩹', desc: '心音や呼吸音を聞くための医療器具。', category: 'tool' },

    'wifi_router': { id: 'wifi_router', name: 'Wi-Fiルーター', emoji: '📶', desc: '無線でインターネットに接続するための基地局。', category: 'tool' },
    'gps_receiver': { id: 'gps_receiver', name: 'GPS受信機', emoji: '📍', desc: '人工衛星からの電波を受信し、現在位置を正確に割り出す装置。', category: 'tool' },

    // Thermometer Tree
    'galileo_thermometer': { id: 'galileo_thermometer', name: 'ガリレオ温度計', emoji: '🌡️', desc: '液体の比重変化を利用した美しい温度計。ガラス球が浮き沈みする。', category: 'tool' },
    'mercury_thermometer': { id: 'mercury_thermometer', name: '水銀温度計', emoji: '🌡️', desc: '水銀の熱膨張を利用した精密な温度計。', category: 'tool' },
    'alcohol_thermometer': { id: 'alcohol_thermometer', name: 'アルコール温度計', emoji: '🌡️', desc: '着色したアルコールを使った安全な温度計。低温に強い。', category: 'tool' },
    'thermistor': { id: 'thermistor', name: 'サーミスタ', emoji: '🔥', desc: '温度によって電気抵抗が変わる半導体素子。', category: 'part' },
    'digital_thermometer': { id: 'digital_thermometer', name: 'デジタル温度計', emoji: '🌡️', desc: '数字で温度を表示する現代的な温度計。', category: 'tool' },
    'infrared_thermometer': { id: 'infrared_thermometer', name: '赤外線温度計', emoji: '🔫', desc: '非接触で物体の温度を測れるハイテク温度計。', category: 'tool' },

    // Advanced Medicine
    'mri': { id: 'mri', name: 'MRI', emoji: '🏥', desc: '強力な磁場を使って体の内部を撮影する医療機器。', category: 'tool' },
    'x_ray_machine': { id: 'x_ray_machine', name: 'X線撮影機', emoji: '💀', desc: 'X線を使って骨などを透視する装置。レントゲン。', category: 'tool' },
    'bed': { id: 'bed', name: 'ベッド', emoji: '🛏️', desc: '快適な睡眠のための家具。', category: 'tool' },

    // Urban Development
    'reinforced_concrete': { id: 'reinforced_concrete', name: '鉄筋コンクリート', emoji: '🏢', desc: 'コンクリートの中に鉄筋を入れて強度を高めた建材。', category: 'material' },
    'wire': { id: 'wire', name: 'ワイヤー', emoji: '➰', desc: '鋼鉄を撚り合わせた丈夫なロープ。', category: 'part' },
    'elevator': { id: 'elevator', name: 'エレベーター', emoji: '🛗', desc: '重いものを垂直に運ぶ昇降機。高層建築に不可欠。', category: 'tool' },
    'skyscraper': { id: 'skyscraper', name: '高層ビル', emoji: '🏙️', desc: '鉄とガラスとコンクリートで作られた摩天楼。', category: 'tool' },

    // Advanced Materials & Processes
    'acrylonitrile': { id: 'acrylonitrile', name: 'アクリロニトリル', emoji: '☠️', desc: 'プロピレンとアンモニアから作られる液体。', category: 'chemical' },
    'carbon_fiber': { id: 'carbon_fiber', name: '炭素繊維', emoji: '🧵', desc: 'アクリル繊維を蒸し焼きにして炭素化したもの。鉄より強くアルミより軽い。', category: 'material' },
    'wood_chip': { id: 'wood_chip', name: '木材チップ', emoji: '🪵', desc: '木材を細かく砕いたもの。紙の原料。', category: 'material' },
    'pulp': { id: 'pulp', name: 'パルプ', emoji: '📄', desc: '木材の繊維を取り出したもの。紙の元。', category: 'material' },
    'photo_resist': { id: 'photo_resist', name: 'フォトレジスト', emoji: '🧴', desc: '光に反応する樹脂。半導体の微細加工に使われる。', category: 'chemical' },

    // Chemical Industries
    'coke_oven': { id: 'coke_oven', name: 'コークス炉', emoji: '🏭', desc: '酸素を遮断して石炭を乾留する炉。製鉄に必須のコークスを作る。', category: 'tool' },
    'propylene': { id: 'propylene', name: 'プロピレン', emoji: '☁️', desc: 'ナフサの熱分解で得られる気体。プラスチックの原料。', category: 'chemical' },
    'polypropylene': { id: 'polypropylene', name: 'ポリプロピレン', emoji: '📦', desc: 'PP。軽くて熱に強いプラスチック。自動車部品や容器に使われる。', category: 'material' },
    'naphthalene': { id: 'naphthalene', name: 'ナフタレン', emoji: '⌬', desc: 'コールタールから得られる昇華性の白い結晶。防虫剤の匂い。', category: 'chemical' },
    'coal_gas': { id: 'coal_gas', name: '石炭ガス', emoji: '🔥', desc: '石炭乾留の副産物。かつては都市ガスとして使われた。', category: 'fuel' },
    'butadiene': { id: 'butadiene', name: 'ブタジエン', emoji: '🧬', desc: 'ナフサ分解で得られる気体。合成ゴムの主原料。', category: 'chemical' },
    'toluene': { id: 'toluene', name: 'トルエン', emoji: '🧪', desc: '芳香族炭化水素。溶剤や爆薬の原料になる。', category: 'chemical' },
    'xylene': { id: 'xylene', name: 'キシレン', emoji: '❌', desc: '芳香族炭化水素。ペットボトルの原料になる。', category: 'chemical' },
    'anthracene': { id: 'anthracene', name: 'アントラセン', emoji: '🌑', desc: 'コールタールから得られる成分。染料の原料。', category: 'chemical' },
    'creosote_oil': { id: 'creosote_oil', name: 'クレオソート油', emoji: '🪵', desc: 'コールタールの留分。強力な木材防腐剤。', category: 'chemical' },
    'synthetic_rubber': { id: 'synthetic_rubber', name: '合成ゴム', emoji: '🍩', desc: '石油から人工的に作られたゴム。品質が安定している。', category: 'material' },
    'tnt': { id: 'tnt', name: 'TNT火薬', emoji: '🧨', desc: 'トリニトロトルエン。非常に安定かつ強力な爆薬。', category: 'chemical' },
    'pet_resin': { id: 'pet_resin', name: 'PET樹脂', emoji: '🧴', desc: 'ポリエチレンテレフタレート。丈夫で透明なプラスチック。', category: 'material' },
    'alizarin': { id: 'alizarin', name: 'アリザリン', emoji: '🔴', desc: 'アントラセンから合成される赤色染料。かつては茜（あかね）から取った。', category: 'material' },
    'colored_cloth': { id: 'colored_cloth', name: '染めた布', emoji: '🧣', desc: '鮮やかに染め上げられた布。文化の象徴。', category: 'material' },

    // Super Modern Materials
    'aramid_fiber': { id: 'aramid_fiber', name: 'アラミド繊維', emoji: '🦺', desc: '鋼鉄の5倍の強度を持つスーパー繊維。ケブラー®などが有名。', category: 'material' },
    'bulletproof_vest': { id: 'bulletproof_vest', name: '防弾チョッキ', emoji: '🛡️', desc: 'アラミド繊維で作られた、銃弾をも防ぐ鎧。', category: 'tool' },
    'aerogel': { id: 'aerogel', name: 'エアロゲル', emoji: '☁️', desc: '成分の99%が空気という個体。青白い煙のように見える究極の断熱材。', category: 'material' },
    'fullerene': { id: 'fullerene', name: 'フラーレン', emoji: '⚽️', desc: '炭素原子60個がサッカーボール状に結合した分子。ナノテクノロジーへの扉。', category: 'material' },
    'rudder': { id: 'rudder', name: '舵', emoji: '🛞', desc: '船の進行方向を変えるための板状の装置。', category: 'part' },
    'carbon_nanotube': { id: 'carbon_nanotube', name: 'カーボンナノチューブ', emoji: '🔗', desc: '炭素原子が筒状になった素材。ダイヤモンドより硬く、銅より電気を通す。', category: 'material' },
    'space_elevator_cable': { id: 'space_elevator_cable', name: '軌道エレベーターケーブル', emoji: '🌌', desc: 'カーボンナノチューブを編み上げた、宇宙まで届く夢のケーブル。', category: 'part' },
    'epoxy_resin': { id: 'epoxy_resin', name: 'エポキシ樹脂', emoji: '🍯', desc: '強力な接着力を持つ樹脂。炭素繊維と組み合わせて最強の素材を作る。', category: 'material' },

    // Solvents & Esters
    'ethyl_acetate': { id: 'ethyl_acetate', name: '酢酸エチル', emoji: '🍍', desc: '甘酸っぱいパイナップルのような香りの液体。接着剤や除光液に使われる。', category: 'chemical' },

    // Materials
    'zinc_sulfide': { id: 'zinc_sulfide', name: '硫化亜鉛', emoji: '✨', desc: '亜鉛と硫黄の化合物。刺激を与えると発光する蛍光体。', category: 'chemical' },

    // Plastics & Petrochemicals
    'vinyl_chloride': { id: 'vinyl_chloride', name: '塩化ビニル', emoji: '💨', desc: 'アセチレンと塩化水素を反応させて得られる気体。プラスチックの原料。', category: 'chemical' },
    'pvc': { id: 'pvc', name: 'ポリ塩化ビニル', emoji: '🧱', desc: '塩ビ。水や薬品に強く、加工しやすいプラスチック。', category: 'material' },
    'bakelite': { id: 'bakelite', name: 'ベークライト', emoji: '🟫', desc: '世界初の完全合成プラスチック。熱に強く、電気を通さない硬い樹脂。', category: 'material' },
    'pvc_pipe': { id: 'pvc_pipe', name: '塩ビパイプ', emoji: '🔧', desc: 'ポリ塩化ビニル製の管。水道や配線に使われる。', category: 'tool' },

    // Advanced Chemicals & Pharmaceuticals
    'picric_acid': { id: 'picric_acid', name: 'ピクリン酸', emoji: '🟨', desc: '強力な爆薬であり、黄色い染料。非常に苦い。', category: 'chemical' },
    'salicylic_acid': { id: 'salicylic_acid', name: 'サリチル酸', emoji: '🧪', desc: '鎮痛作用を持つ無色の結晶。アスピリンの原料。', category: 'chemical' },
    'aspirin': { id: 'aspirin', name: 'アスピリン', emoji: '💊', desc: '世界で最も有名な解熱鎮痛剤。アセチルサリチル酸。', category: 'chemical' },
    'methyl_salicylate': { id: 'methyl_salicylate', name: 'サリチル酸メチル', emoji: '🌿', desc: '特有の清涼感ある香りを持つ液体。湿布薬に使われる。', category: 'chemical' },
    'chloroform': { id: 'chloroform', name: 'クロロホルム', emoji: '💤', desc: '甘い臭いを持つ液体。かつて麻酔薬として使われた。', category: 'chemical' },
    'sodium': { id: 'sodium', name: '金属ナトリウム', emoji: '🪙', desc: '銀白色の非常に柔らかい金属。水と激しく反応する。', category: 'chemical' },
    'fluorine': { id: 'fluorine', name: 'フッ素', emoji: '🟡', desc: '淡黄色の気体。全元素中で最強の酸化力を持つ。', category: 'chemical' },
    'urea': { id: 'urea', name: '尿素', emoji: '❄️', desc: '無機物から初めて合成された有機化合物。重要な窒素肥料。', category: 'chemical' },
    'bone_meal': { id: 'bone_meal', name: '骨粉', emoji: '🦴', desc: '骨を砕いて作った粉末。肥料の原料になる。', category: 'material' },
    'superphosphate': { id: 'superphosphate', name: '過リン酸石灰', emoji: '🌫️', desc: '骨粉を硫酸で処理して作った速効性のリン酸肥料。', category: 'chemical' },
    'soap_bubbles': { id: 'soap_bubbles', name: 'シャボン玉', emoji: '🫧', desc: '石鹸とお湯を混ぜて作った、虹色に輝く儚い泡。', category: 'material' },
    'diethyl_ether': { id: 'diethyl_ether', name: 'ジエチルエーテル', emoji: '🧪', desc: 'エタノールを硫酸で脱水して作る揮発性の液体。強力な麻酔薬や溶剤。', category: 'chemical' },

    // Firearms & Military Tech
    'nitrocellulose': { id: 'nitrocellulose', name: '無煙火薬', emoji: '☁️', desc: 'ニトロセルロース。綿を硝酸と硫酸で処理した強力な爆薬。燃えカスが残らない。', category: 'chemical' },
    'mercury_fulminate': { id: 'mercury_fulminate', name: '雷酸水銀', emoji: '💥', desc: '衝撃で爆発する敏感な起爆剤。水銀を硝酸とアルコールで処理して作る。', category: 'chemical' },
    'bullet': { id: 'bullet', name: '弾丸', emoji: '🌑', desc: '鉛をプレスして作った弾。', category: 'part' },
    'cartridge': { id: 'cartridge', name: '弾薬筒', emoji: '🧨', desc: '弾丸、火薬、雷管を一体化した近代的な弾薬。', category: 'part' },
    'matchlock_gun': { id: 'matchlock_gun', name: '火縄銃', emoji: '🔫', desc: '鉄パイプとマッチ（火縄）を用いた初期の銃火器。', category: 'tool' },
    'cannon': { id: 'cannon', name: '大砲', emoji: '💣', desc: '鉄パイプと車輪を組み合わせた強力な重火器。', category: 'tool' },
    'rifled_barrel': { id: 'rifled_barrel', name: 'ライフル銃身', emoji: '🌀', desc: '内側に旋条（ライフリング）を刻み、弾の直進性を高めた銃身。', category: 'part' },
    'rifle': { id: 'rifle', name: 'ライフル銃', emoji: '🔫', desc: 'ライフリングと弾薬筒により、長射程と高い精度を実現した近代銃。', category: 'tool' },

    // 3D Printing & Digital Fabrication
    'stepper_motor': { id: 'stepper_motor', name: 'ステッピングモーター', emoji: '⚙️', desc: 'パルス信号で正確に回転角を制御できるモーター。精密機械の心臓部。', category: 'part' },
    'nozzle': { id: 'nozzle', name: 'ノズル', emoji: '💧', desc: '液体や溶けた樹脂を吐出する先端部品。', category: 'part' },
    'filament': { id: 'filament', name: 'フィラメント', emoji: '🧵', desc: '3Dプリンター用の樹脂素材。熱で溶かして積層する。', category: 'material' },
    '3d_printer': { id: '3d_printer', name: '3Dプリンター', emoji: '🖨️', desc: 'デジタルデータから立体物を造形する魔法の箱。', category: 'tool' },
    'pla': { id: 'pla', name: 'PLA樹脂', emoji: '🌽', desc: 'ポリ乳酸。植物由来のエコなプラスチック。3Dプリンターでよく使われる。', category: 'material' },
    'plastic_model': { id: 'plastic_model', name: 'プラスチックモデル', emoji: '🤖', desc: '3Dプリンターで出力された精巧な造形物。', category: 'tool' },

    // Textile & Fashion
    'cotton': { id: 'cotton', name: '綿花', emoji: '☁️', desc: '種子を包むフワフワの繊維。吸水性と肌触りが良い。', category: 'material' },
    'wool': { id: 'wool', name: '羊毛', emoji: '🐑', desc: '羊の毛。保温性が高く、縮れが空気を含む。', category: 'material' },
    'cocoon': { id: 'cocoon', name: '繭', emoji: '🐛', desc: 'カイコが作るシェルター。ほどくと一本の長い糸になる。', category: 'material' },
    'raw_silk': { id: 'raw_silk', name: '生糸', emoji: '🧵', desc: '繭から取り出したままの絹糸。美しい光沢を持つ。', category: 'material' },
    'polyester': { id: 'polyester', name: 'ポリエステル', emoji: '👔', desc: '石油から作られる合成繊維。丈夫でシワになりにくい。', category: 'material' },

    'spinning_wheel': { id: 'spinning_wheel', name: '糸車', emoji: '🎡', desc: '繊維を撚り合わせて糸にする道具。', category: 'tool' },
    'loom': { id: 'loom', name: '織機', emoji: '🧶', desc: '縦糸と横糸を交差させて布を織る機械。', category: 'tool' },
    'thread': { id: 'thread', name: '糸', emoji: '🧵', desc: '繊維を撚り合わせて作った細長い素材。', category: 'material' },

    // Missing definitions fix
    'flower': { id: 'flower', name: '花', emoji: '🌸', desc: '植物が咲かせる美しい器官。染料や香料の原料にもなる。', category: 'natural' },
    'plastic': { id: 'plastic', name: 'プラスチック', emoji: '🧱', desc: '石油から作られた合成樹脂の総称。軽くて加工しやすい。', category: 'material' },
    'clothes': { id: 'clothes', name: '衣服', emoji: '👕', desc: '布で作られた着るもの。人類の生活必需品。', category: 'tool' },
    'lumber': { id: 'lumber', name: '材木', emoji: '🪵', desc: '建築や家具に使える、加工された木材。', category: 'material' },
    'pressure_vessel': { id: 'pressure_vessel', name: '圧力容器', emoji: '🛢️', desc: '高圧に耐える特別な容器。化学プラントや発電所で使われる。', category: 'tool' },

    'sewing_machine': { id: 'sewing_machine', name: 'ミシン', emoji: '🪡', desc: '機械的に縫い目を作る装置。服の大量生産を可能にした。', category: 'tool' },

    // Robotics & AI
    'sensor': { id: 'sensor', name: 'センサー', emoji: '👁️', desc: '光、音、温度などを感知する電子部品。ロボットの五感。', category: 'part' },
    'actuator': { id: 'actuator', name: 'アクチュエーター', emoji: '💪', desc: 'エネルギーを物理的な動きに変換する駆動装置。ロボットの筋肉。', category: 'part' },
    'ai_chip': { id: 'ai_chip', name: 'AIチップ', emoji: '🧠', desc: 'ニューラルネットワークを処理するための特殊なプロセッサ。', category: 'part' },
    'robot': { id: 'robot', name: 'ロボット', emoji: '🤖', desc: 'プログラムに従って自動で作業を行う機械。', category: 'tool' },
    'android': { id: 'android', name: 'アンドロイド', emoji: '🧍', desc: '人間と見分けがつかないほど精巧な人型ロボット。', category: 'tool' },

    // Music & Arts
    'guitar': { id: 'guitar', name: 'ギター', emoji: '🎸', desc: '弦を弾いて音を出す楽器。', category: 'tool' },
    'electric_guitar': { id: 'electric_guitar', name: 'エレキギター', emoji: '🎸', desc: '弦の振動を電気信号に変えて大音量を出すギター。ロックの魂。', category: 'tool' },
    'piano': { id: 'piano', name: 'ピアノ', emoji: '🎹', desc: '鍵盤を叩いてハンマーで弦を打つ鍵盤楽器の王様。', category: 'tool' },
    'synthesizer': { id: 'synthesizer', name: 'シンセサイザー', emoji: '🎛️', desc: '電気的に音を合成してあらゆる音色を作り出す電子楽器。', category: 'tool' },

    'denim': { id: 'denim', name: 'デニム', emoji: '👖', desc: '太い綿糸で綾織りにした厚手の生地。インディゴブルーが特徴。', category: 'material' },
    'silk_cloth': { id: 'silk_cloth', name: '絹織物', emoji: '👘', desc: '生糸で織られた滑らかな布。軽くて美しい。', category: 'material' },

    'jeans': { id: 'jeans', name: 'ジーンズ', emoji: '👖', desc: 'デニムで作られたズボン。元は鉱夫の作業着だった。', category: 'tool' },
    'dress': { id: 'dress', name: 'ドレス', emoji: '👗', desc: '華やかな装飾が施された衣服。', category: 'tool' },
    'kimono': { id: 'kimono', name: '着物', emoji: '👘', desc: '日本の伝統的な衣服。直線的な裁断が特徴。', category: 'tool' },

    // LED & Compound Semiconductors
    'gallium': { id: 'gallium', name: 'ガリウム', emoji: '🌡️', desc: '体温で溶ける不思議な金属。半導体材料として極めて重要。', category: 'material' },
    'arsenic': { id: 'arsenic', name: 'ヒ素', emoji: '☠️', desc: '猛毒を持つ元素だが、半導体には欠かせないドーピング剤。', category: 'material' },
    'gallium_arsenide': { id: 'gallium_arsenide', name: 'ヒ化ガリウム', emoji: '🔴', desc: '高速通信や赤色LEDに使われる化合物半導体。', category: 'material' },
    'gallium_nitride': { id: 'gallium_nitride', name: '窒化ガリウム', emoji: '💎', desc: '青色LEDの夢を叶えた奇跡の結晶。パワー半導体にもなる。', category: 'material' },
    'red_led': { id: 'red_led', name: '赤色LED', emoji: '🛑', desc: '最初に発明されたLED。表示ランプなどに使われる。', category: 'part' },
    'blue_led': { id: 'blue_led', name: '青色LED', emoji: '🔵', desc: '20世紀最後の大発明。これにより光の三原色が揃った。', category: 'part' },
    'white_led': { id: 'white_led', name: '白色LED', emoji: '💡', desc: '青色LEDと蛍光体を組み合わせ、太陽のような光を作る。', category: 'part' },
    'led_bulb': { id: 'led_bulb', name: 'LED電球', emoji: '🔦', desc: '省エネで長寿命な次世代の明かり。', category: 'tool' },
    'illumination': { id: 'illumination', name: 'イルミネーション', emoji: '✨', desc: '数多のLEDが織りなす光の芸術。', category: 'tool' },

    // Machine Age & Advanced Tech Additions
    'lathe': { id: 'lathe', name: '旋盤', emoji: '⚙️', desc: '回転させた材料に刃物を当てて加工する工作機械。', category: 'tool' },
    'plastic': { id: 'plastic', name: 'プラスチック', emoji: '🥤', desc: '合成樹脂の総称。自由な形に加工できる。', category: 'material' },
    'wire': { id: 'wire', name: 'ワイヤー', emoji: '〰️', desc: '金属を細く伸ばした線。', category: 'material' },
    'aluminum': { id: 'aluminum', name: 'アルミニウム', emoji: '⚪', desc: '軽くて加工しやすい金属。', category: 'material' },
    'tin': { id: 'tin', name: 'スズ', emoji: '⚪', desc: '融点が低い金属。メッキや合金に使われる。', category: 'material' },
    'zinc_sulfide': { id: 'zinc_sulfide', name: '硫化亜鉛', emoji: '✨', desc: '発光材料として使われる化合物。', category: 'chemical' },
    'photodiode': { id: 'photodiode', name: 'フォトダイオード', emoji: '🔅', desc: '光を電気に変える半導体素子。', category: 'part' },
    'copper_plate': { id: 'copper_plate', name: '銅板', emoji: '🛡️', desc: '銅を薄く延ばした板。熱伝導率が高い。', category: 'material' },
    'acetaldehyde': { id: 'acetaldehyde', name: 'アセトアルデヒド', emoji: '🧪', desc: '刺激臭のある液体。酢酸などの原料になる。', category: 'chemical' },
    'gun_barrel': { id: 'gun_barrel', name: '銃身', emoji: '🔩', desc: '弾丸が通るための丈夫な筒。', category: 'part' },
    'rifling_machine': { id: 'rifling_machine', name: '旋条機', emoji: '⚙️', desc: '銃身の内側に溝を刻むための精密な機械。', category: 'tool' },
    'rifled_barrel': { id: 'rifled_barrel', name: 'ライフリング銃身', emoji: '🌀', desc: '命中精度を高めるための溝が刻まれた銃身。', category: 'part' },

    'stepper_motor': { id: 'stepper_motor', name: 'ステッピングモーター', emoji: '⚙️', desc: '回転角度を正確に制御できるモーター。', category: 'part' },
    'wood_chip': { id: 'wood_chip', name: '木片', emoji: '🪵', desc: '木材を細かく砕いたもの。パルプの原料。', category: 'material' },
    'pulp': { id: 'pulp', name: 'パルプ', emoji: '📄', desc: '木材の繊維を取り出したもの。紙の原料。', category: 'material' },
    'photo_resist': { id: 'photo_resist', name: 'フォトレジスト', emoji: '🧪', desc: '光に反応して性質が変わる樹脂。半導体製造に不可欠。', category: 'chemical' },

    // === Bluetooth Items ===
    'rf_module': { id: 'rf_module', name: 'RFモジュール', emoji: '📶', desc: '無線通信を行うための基本的な部品。', category: 'part' },
    'bluetooth_chip': { id: 'bluetooth_chip', name: 'Bluetoothチップ', emoji: '🦷', desc: '近距離無線通信を制御する専用IC。', category: 'part' },
    'wireless_earphones': { id: 'wireless_earphones', name: 'ワイヤレスイヤホン', emoji: '🎧', desc: 'コードの煩わしさから解放されたイヤホン。', category: 'tool' },
    'bluetooth_speaker': { id: 'bluetooth_speaker', name: 'Bluetoothスピーカー', emoji: '🔈', desc: 'スマホの音楽をどこでも楽しめるスピーカー。', category: 'machine' },
    'smart_watch': { id: 'smart_watch', name: 'スマートウォッチ', emoji: '⌚', desc: '手首で通知確認や健康管理ができるウェアラブル端末。', category: 'machine' },
    'smart_home_hub': { id: 'smart_home_hub', name: 'スマートホームハブ', emoji: '🏠', desc: '家中のスマート家電をまとめて操作する司令塔。', category: 'machine' },
    'switch': { id: 'switch', name: 'スイッチ', emoji: '🔘', desc: '電気回路のON/OFFを切り替える部品。', category: 'part' },
    'game_controller': { id: 'game_controller', name: 'ゲームコントローラー', emoji: '🎮', desc: 'ゲームを操作するための無線コントローラー。', category: 'tool' },

    // === Rare Metals ===
    'bismuth_ore': { id: 'bismuth_ore', name: '輝蒼鉛鉱', emoji: '🪨', desc: 'ビスマスを含む鉱石。加熱すると溶けやすい。', category: 'natural' },
    'bismuth': { id: 'bismuth', name: 'ビスマス', emoji: '🌈', desc: '虹色に輝く奇妙な金属。骸骨のような結晶を作る。', category: 'material' },
    'bismuth_crystal': { id: 'bismuth_crystal', name: 'ビスマス結晶', emoji: '💎', desc: '人工的に作られたビスマスの美しい結晶。', category: 'material' },
    'palladium': { id: 'palladium', name: 'パラジウム', emoji: '💍', desc: 'プラチナに似た貴金属。水素を吸い込む性質がある。', category: 'material' },
    'iridium': { id: 'iridium', name: 'イリジウム', emoji: '☄️', desc: '隕石に含まれる非常に硬く重い金属。恐竜絶滅の証拠？', category: 'material' },
    'antimony': { id: 'antimony', name: 'アンチモン', emoji: '💄', desc: '毒性があるが、合金を硬くするのに使われる半金属。', category: 'material' },
    'magnesium': { id: 'magnesium', name: 'マグネシウム', emoji: '⚪️', desc: '軽く、激しく燃える金属。', category: 'material' },
    'magnesium_ribbon': { id: 'magnesium_ribbon', name: 'マグネシウムリボン', emoji: '➰', desc: '薄く帯状に加工されたマグネシウム。着火しやすい。', category: 'part' },
    'white_gold': { id: 'white_gold', name: 'ホワイトゴールド', emoji: '💍', desc: '金とパラジウムの合金。プラチナのような輝き。', category: 'material' },
    'fountain_pen': { id: 'fountain_pen', name: '万年筆', emoji: '✒️', desc: 'イリジウムのペン先を持つ高級な筆記具。', category: 'tool' },
    'type_metal': { id: 'type_metal', name: '活字合金', emoji: '🔠', desc: '鉛・アンチモン・スズの合金。細かい文字もくっきり鋳造できる。', category: 'material' },
    'flash_powder': { id: 'flash_powder', name: '閃光粉', emoji: '📸', desc: '一瞬で強烈な光を放つ粉末。写真撮影に使われる。', category: 'chemical' },


    // === Morse Code & Telegraphy ===
    'telegraph_key': { id: 'telegraph_key', name: '電鍵', emoji: '🛎️', desc: 'モールス信号を打つためのスイッチ。トン・ツー。', category: 'tool' },
    'telegraph': { id: 'telegraph', name: '電信機', emoji: '📠', desc: '電磁石を使って遠くへ文字を送る装置。通信の夜明け。', category: 'machine' },
    'wireless_telegraph': { id: 'wireless_telegraph', name: '無線電信機', emoji: '📻', desc: '電波を使って見えない相手と会話する魔法の機械。', category: 'machine' },



    // === More Electronics & Communication ===
    'modem': { id: 'modem', name: 'モデム', emoji: '📠', desc: 'デジタル信号とアナログ信号を変換する通信装置。', category: 'machine' },
    'fax_machine': { id: 'fax_machine', name: 'FAX', emoji: '📠', desc: '紙の情報を電話回線で送受信する装置。', category: 'machine' },
    'record': { id: 'record', name: 'レコード', emoji: '💿', desc: '音を溝に刻んで記録した円盤。', category: 'tool' },
    'phonograph': { id: 'phonograph', name: '蓄音機', emoji: '📢', desc: 'レコードの音を再生する装置。', category: 'machine' },
    'cassette_tape': { id: 'cassette_tape', name: 'カセットテープ', emoji: '📼', desc: '磁気テープに音を記録するメディア。', category: 'tool' },
    'compact_disc': { id: 'compact_disc', name: 'CD', emoji: '💿', desc: 'デジタル情報を記録した光ディスク。', category: 'tool' },
    'cd_player': { id: 'cd_player', name: 'CDプレーヤー', emoji: '🎧', desc: 'CDを再生する装置。', category: 'machine' },
    'dvd': { id: 'dvd', name: 'DVD', emoji: '📀', desc: '大容量の映像やデータを記録できる光ディスク。', category: 'tool' },
    'blu_ray': { id: 'blu_ray', name: 'Blu-ray', emoji: '💿', desc: '青色レーザーを使って超高画質映像を記録するディスク。', category: 'tool' },
    'vacuum_tube': { id: 'vacuum_tube', name: '真空管', emoji: '💡', desc: '真空中で電子を制御するガラス管。', category: 'part' },
    'telephone': { id: 'telephone', name: '電話機', emoji: '☎️', desc: '離れた場所と声をやり取りする装置。', category: 'machine' },
    'crt': { id: 'crt', name: 'ブラウン管', emoji: '📺', desc: '電子ビームで映像を映し出す装置。', category: 'part' },
    'television': { id: 'television', name: 'テレビ', emoji: '📺', desc: '電波に乗って送られてくる映像を受信する装置。', category: 'machine' },
    'radio': { id: 'radio', name: 'ラジオ', emoji: '📻', desc: '電波を受信して音を聞く装置。', category: 'machine' },
    'transceiver': { id: 'transceiver', name: 'トランシーバー', emoji: '📟', desc: '無線で声を送受信できる携帯端末。', category: 'tool' },
    'radar': { id: 'radar', name: 'レーダー', emoji: '📡', desc: '電波の反射を利用して物体の位置を知る装置。', category: 'machine' },
    'microwave_oven': { id: 'microwave_oven', name: '電子レンジ', emoji: '🍳', desc: '電波で水の分子を振動させて温める調理家電。', category: 'machine' },
    'wifi_router': { id: 'wifi_router', name: 'Wi-Fiルーター', emoji: '📶', desc: '無線でインターネットに接続する装置。', category: 'machine' },
    'gps_receiver': { id: 'gps_receiver', name: 'GPS受信機', emoji: '📍', desc: '衛星からの信号で現在地を正確に知る装置。', category: 'tool' },
    'magnetron': { id: 'magnetron', name: 'マグネトロン', emoji: '🧲', desc: '強力なマイクロ波を発生させる真空管。', category: 'part' },
    'radome': { id: 'radome', name: 'レドーム', emoji: '⚪', desc: 'レーダーアンテナを保護するドーム状のカバー。', category: 'part' },
    'hydrophone': { id: 'hydrophone', name: 'ハイドロフォン', emoji: '🎤', desc: '水中の音を拾うマイク。', category: 'tool' },
    'sonar': { id: 'sonar', name: 'ソナー', emoji: '🚢', desc: '音波を使って水中の物体を探知する装置。', category: 'machine' },
    'fish_finder': { id: 'fish_finder', name: '魚群探知機', emoji: '🐟', desc: '魚の群れを見つけるためのソナー。', category: 'machine' },
    'depth_sounder': { id: 'depth_sounder', name: '音響測深機', emoji: '📏', desc: '海底の深さを測る装置。', category: 'machine' },
    'ultrasound': { id: 'ultrasound', name: '超音波診断装置', emoji: '🩺', desc: '超音波で体の内部を見る医療機器。', category: 'machine' },

    // === Printing & Office ===
    'ink': { id: 'ink', name: 'インク', emoji: '🖋️', desc: '文字や絵を書くための色付き液体。', category: 'material' },
    'movable_type': { id: 'movable_type', name: '活字', emoji: '🔠', desc: '金属で作られた文字の型。', category: 'tool' },
    'scanner': { id: 'scanner', name: 'スキャナ', emoji: '📸', desc: '紙の情報をデジタル画像として取り込む装置。', category: 'machine' },
    'printer': { id: 'printer', name: 'プリンタ', emoji: '🖨️', desc: 'デジタル情報を紙に印刷する装置。', category: 'machine' },

    // === Medical ===
    'vaccine': { id: 'vaccine', name: 'ワクチン', emoji: '💉', desc: '病気の予防のために打つ薬。', category: 'chemical' },
    'scalpel': { id: 'scalpel', name: 'メス', emoji: '🔪', desc: '手術に使われる非常によく切れる刃物。', category: 'tool' },
    'anesthesia': { id: 'anesthesia', name: '麻酔', emoji: '💤', desc: '痛みを感じなくさせる薬。', category: 'chemical' },
    'ct_scanner': { id: 'ct_scanner', name: 'CTスキャナ', emoji: '🍩', desc: 'X線を使って体の断面を撮影する装置。', category: 'machine' },
    'endoscope': { id: 'endoscope', name: '内視鏡', emoji: '🩺', desc: '細い管を体に入れて内部を観察するカメラ。', category: 'tool' },
    // 'defibrillator' defined above
    'stethoscope': { id: 'stethoscope', name: '聴診器', emoji: '🩺', desc: '体の中の音を聞くための道具。', category: 'tool' },
    'artificial_heart': { id: 'artificial_heart', name: '人工心臓', emoji: '🫀', desc: '心臓の代わりに血液を送り出す機械。', category: 'machine' },
    'dialysis_machine': { id: 'dialysis_machine', name: '透析機', emoji: '🩸', desc: '腎臓の代わりに血液をきれいにする装置。', category: 'machine' },
    'dna_sequencer': { id: 'dna_sequencer', name: 'DNAシーケンサー', emoji: '🧬', desc: '遺伝子情報を読み取る装置。', category: 'machine' },
    'mri': { id: 'mri', name: 'MRI', emoji: '🧲', desc: '強力な磁場を使って体の内部を撮影する装置。', category: 'machine' },
    'x_ray_machine': { id: 'x_ray_machine', name: 'X線撮影機', emoji: '🦴', desc: 'X線を使って骨などを撮影する装置。', category: 'machine' },

    // === Chemistry & Materials ===
    'mercury_fulminate': { id: 'mercury_fulminate', name: '雷酸水銀', emoji: '💥', desc: '衝撃で爆発する敏感な物質。雷管に使われる。', category: 'chemical' },
    'nitrocellulose': { id: 'nitrocellulose', name: 'ニトロセルロース', emoji: '🔥', desc: '綿火薬。燃えやすく、爆薬やプラスチックの原料になる。', category: 'chemical' },
    'bullet': { id: 'bullet', name: '弾丸', emoji: '🔫', desc: '銃から発射される金属の塊。', category: 'tool' },
    'vinyl_chloride': { id: 'vinyl_chloride', name: '塩化ビニル', emoji: '🧪', desc: 'PVCの原料となるガス。', category: 'chemical' },
    'pvc': { id: 'pvc', name: 'ポリ塩化ビニル', emoji: '🚰', desc: '水道管などに使われる丈夫なプラスチック。', category: 'material' },
    'bakelite': { id: 'bakelite', name: 'ベークライト', emoji: '🟤', desc: '世界初の合成樹脂。熱に強く絶縁性が高い。', category: 'material' },
    'pvc_pipe': { id: 'pvc_pipe', name: '塩ビ管', emoji: '🚰', desc: 'PVCで作られたパイプ。', category: 'part' },
    'picric_acid': { id: 'picric_acid', name: 'ピクリン酸', emoji: '💥', desc: '黄色い爆薬。かつては火傷の薬にも使われた。', category: 'chemical' },
    'salicylic_acid': { id: 'salicylic_acid', name: 'サリチル酸', emoji: '🧪', desc: '柳の皮に含まれる成分。鎮痛作用がある。', category: 'chemical' },
    'aspirin': { id: 'aspirin', name: 'アスピリン', emoji: '💊', desc: '世界で最も有名な鎮痛剤のひとつ。', category: 'chemical' },
    'methyl_salicylate': { id: 'methyl_salicylate', name: 'サリチル酸メチル', emoji: '🌿', desc: '湿布のような匂いのする液体。消炎鎮痛剤。', category: 'chemical' },
    'chloroform': { id: 'chloroform', name: 'クロロホルム', emoji: '🧪', desc: '甘い香りのする麻酔薬。', category: 'chemical' },
    'sodium': { id: 'sodium', name: 'ナトリウム', emoji: '⚪', desc: '水と激しく反応する金属。', category: 'material' },
    'fluorine': { id: 'fluorine', name: 'フッ素', emoji: '💨', desc: 'あらゆるものを腐食させる最強の反応性を持つ気体。', category: 'chemical' },
    'urea': { id: 'urea', name: '尿素', emoji: '⚪', desc: '肥料や樹脂の原料になる有機化合物。', category: 'chemical' },
    'bone_meal': { id: 'bone_meal', name: '骨粉', emoji: '🦴', desc: '骨を砕いた粉。リン酸肥料になる。', category: 'item' },
    'superphosphate': { id: 'superphosphate', name: '過リン酸石灰', emoji: '🌱', desc: '植物の根を育てる肥料。', category: 'chemical' },
    'diethyl_ether': { id: 'diethyl_ether', name: 'ジエチルエーテル', emoji: '🧪', desc: '揮発性の高い液体。麻酔にも使われる。', category: 'chemical' },
    'soap_bubbles': { id: 'soap_bubbles', name: 'シャボン玉', emoji: '🫧', desc: '石鹸膜でできた虹色の球体。', category: 'item' },
    'polycarbonate': { id: 'polycarbonate', name: 'ポリカーボネート', emoji: '🛡️', desc: '衝撃に非常に強い透明なプラスチック。', category: 'material' },
    'laser': { id: 'laser', name: 'レーザー', emoji: '🔦', desc: '指向性が高く強力な光。', category: 'tool' },
    'creosote_oil': { id: 'creosote_oil', name: 'クレオソート油', emoji: '🛢️', desc: '木材の防腐剤として使われる油。', category: 'chemical' },
    'retort_pouch': { id: 'retort_pouch', name: 'レトルトパウチ', emoji: '🥡', desc: '保存性に優れた多層フィルムの袋。', category: 'tool' },
    'acrylonitrile': { id: 'acrylonitrile', name: 'アクリロニトリル', emoji: '🧪', desc: '合成繊維や合成ゴムの原料。', category: 'chemical' },
    'carbon_fiber': { id: 'carbon_fiber', name: '炭素繊維', emoji: '🧵', desc: '鉄より強くアルミより軽い先端素材。', category: 'material' },
    'quartz_crucible': { id: 'quartz_crucible', name: '石英ルツボ', emoji: '🥣', desc: '高純度のガラスで作られた耐熱容器。シリコンの溶解に使う。', category: 'tool' },
    'silicon_ingot': { id: 'silicon_ingot', name: 'シリコンインゴット', emoji: '💎', desc: '高純度シリコンの巨大な結晶。', category: 'material' },
    'liquid_nitrogen': { id: 'liquid_nitrogen', name: '液体窒素', emoji: '❄️', desc: '極低温の液体。あらゆるものを凍らせる。', category: 'chemical' },
    'guideway': { id: 'guideway', name: 'ガイドウェイ', emoji: '🛤️', desc: 'リニアモーターカーが浮上走行するための軌道。', category: 'machine' },
    'super_conductor': { id: 'super_conductor', name: '超伝導体', emoji: '🧊', desc: '電気抵抗がゼロになった物質。', category: 'material' },
    'copper_pipe': { id: 'copper_pipe', name: '銅管', emoji: '🪈', desc: '熱伝導が良い銅のパイプ。エアコンなどに使われる。', category: 'part' },
    'heat_exchanger': { id: 'heat_exchanger', name: '熱交換器', emoji: '🔄', desc: '温度の異なる流体の間で熱を移動させる装置。', category: 'machine' },
    'refrigerant': { id: 'refrigerant', name: '冷媒', emoji: '❄️', desc: '熱を運ぶためのガス。', category: 'chemical' },
    'heat_pump': { id: 'heat_pump', name: 'ヒートポンプ', emoji: '🌡️', desc: '少ないエネルギーで大きな熱を移動させる技術。', category: 'machine' },
    'air_conditioner': { id: 'air_conditioner', name: 'エアコン', emoji: '❄️', desc: '室内の温度や湿度を調節する機械。', category: 'machine' },
    'peltier_element': { id: 'peltier_element', name: 'ペルチェ素子', emoji: '🔲', desc: '電気を流すと熱を移動させる半導体素子。', category: 'part' },
    'wearable_thermo_device': { id: 'wearable_thermo_device', name: '着るクーラー', emoji: '👕', desc: 'ペルチェ素子を使って体を直接冷やすデバイス。', category: 'tool' },
    'titanium_plate': { id: 'titanium_plate', name: 'チタン板', emoji: '🛡️', desc: '軽くて強いチタンの板。', category: 'material' },

    // === Vehicles & Machines ===
    'cart': { id: 'cart', name: '荷車', emoji: '🛒', desc: '荷物を運ぶための車。', category: 'tool' },
    'pendulum': { id: 'pendulum', name: '振り子', emoji: '🕰️', desc: '一定のリズムで揺れる重り。', category: 'part' },
    'pendulum_clock': { id: 'pendulum_clock', name: '振り子時計', emoji: '🕰️', desc: '振り子の等時性を利用した時計。', category: 'machine' },
    'chronometer': { id: 'chronometer', name: 'クロノメーター', emoji: '⏱️', desc: '船の揺れに影響されない高精度の時計。航海に必須。', category: 'machine' },
    'quartz_clock': { id: 'quartz_clock', name: 'クォーツ時計', emoji: '⌚', desc: '水晶の振動を利用した非常に正確な時計。', category: 'machine' },
    'atomic_clock': { id: 'atomic_clock', name: '原子時計', emoji: '⚛️', desc: '原子の振動を利用した究極に正確な時計。', category: 'machine' },
    'bicycle': { id: 'bicycle', name: '自転車', emoji: '🚲', desc: '人力で走る二輪車。エコな乗り物。', category: 'machine' },
    'motorcycle': { id: 'motorcycle', name: 'オートバイ', emoji: '🏍️', desc: 'エンジンで走る二輪車。', category: 'machine' },
    'electric_car': { id: 'electric_car', name: '電気自動車', emoji: '🚗', desc: '電気モーターで静かに走る未来の車。', category: 'machine' },
    'drone': { id: 'drone', name: 'ドローン', emoji: '🚁', desc: '遠隔操作で飛ぶ無人航空機。', category: 'machine' },
    'tin_plate': { id: 'tin_plate', name: 'ブリキ板', emoji: '🥫', desc: '鉄にスズをメッキした板。錆びにくい。', category: 'material' },
    'can': { id: 'can', name: '缶', emoji: '🥫', desc: 'ブリキで作った容器。', category: 'tool' },
    'propeller': { id: 'propeller', name: 'プロペラ', emoji: '߷', desc: '回転して推進力を生む羽根。', category: 'part' },
    'hot_air_balloon': { id: 'hot_air_balloon', name: '熱気球', emoji: '🎈', desc: '熱した空気の浮力で空を飛ぶ乗り物。', category: 'machine' },
    'airship': { id: 'airship', name: '飛行船', emoji: '🎈', desc: 'ガスで浮き、プロペラで進む空の船。', category: 'machine' },
    'airplane': { id: 'airplane', name: '飛行機', emoji: '✈️', desc: '翼が生む揚力で空を飛ぶ機械。', category: 'machine' },
    'helicopter': { id: 'helicopter', name: 'ヘリコプター', emoji: '🚁', desc: '回転翼で垂直に離着陸できる航空機。ホバリングが可能。', category: 'machine' },
    'jet_engine': { id: 'jet_engine', name: 'ジェットエンジン', emoji: '💨', desc: '高速の噴流で推進力を生む強力なエンジン。', category: 'machine' },
    'jet_plane': { id: 'jet_plane', name: 'ジェット機', emoji: '✈️', desc: '音速に近い速度で空を飛ぶ飛行機。', category: 'machine' },
    'elevator': { id: 'elevator', name: 'エレベーター', emoji: '🛗', desc: '上下に移動するカゴ。高層建築に不可欠。', category: 'machine' },
    'skyscraper': { id: 'skyscraper', name: '超高層ビル', emoji: '🏙️', desc: '空を突き刺すような高い建物。', category: 'machine' },
    'reinforced_concrete': { id: 'reinforced_concrete', name: '鉄筋コンクリート', emoji: '🏢', desc: '鉄筋で補強されたコンクリート。非常に頑丈。', category: 'material' },
    'maglev_train': { id: 'maglev_train', name: 'リニアモーターカー', emoji: '🚄', desc: '磁力で浮上して超高速で走る列車。', category: 'machine' },

    // === Food ===
    'meat': { id: 'meat', name: '肉', emoji: '🍖', desc: '動物の肉。貴重なタンパク源。', category: 'food' },
    'soybean': { id: 'soybean', name: '大豆', emoji: '🫘', desc: '畑の肉と呼ばれる栄養豊富な豆。', category: 'food' },
    'soy_sauce': { id: 'soy_sauce', name: '醤油', emoji: '🍶', desc: '大豆を発酵させて作る調味料。', category: 'food' },
    'retort_food': { id: 'retort_food', name: 'レトルト食品', emoji: '🍛', desc: '温めるだけで食べられる便利な食品。', category: 'food' },
    'culture_medium': { id: 'culture_medium', name: '培養液', emoji: '🧪', desc: '細胞を育てるための液体。', category: 'chemical' },
    'cultured_meat': { id: 'cultured_meat', name: '培養肉', emoji: '🧫', desc: '研究所で育てられた肉。', category: 'food' },
    'freeze_dryer': { id: 'freeze_dryer', name: '凍結乾燥機', emoji: '❄️', desc: '食品を凍らせて乾燥させる機械。', category: 'machine' },
    'space_food': { id: 'space_food', name: '宇宙食', emoji: '🚀', desc: '宇宙でも安全に食べられる保存食。', category: 'food' },
    'canned_food': { id: 'canned_food', name: '缶詰', emoji: '🥫', desc: '長期保存ができる食品。', category: 'food' },

    // === Others ===
    'bed': { id: 'bed', name: 'ベッド', emoji: '🛏️', desc: '快適な睡眠のための家具。', category: 'tool' },
    'electric_guitar': { id: 'electric_guitar', name: 'エレキギター', emoji: '🎸', desc: '電気信号で音を増幅させるギター。', category: 'tool' },

    // === Future & Modern Tech ===
    'game_console': { id: 'game_console', name: 'ゲーム機', emoji: '🎮', desc: 'テレビに繋いで遊ぶ家庭用ゲーム専用機。', category: 'machine' },
    'robot_vacuum': { id: 'robot_vacuum', name: 'お掃除ロボット', emoji: '🧹', desc: '部屋のゴミを自動で掃除してくれる賢いロボット。', category: 'machine' },
    'smart_speaker': { id: 'smart_speaker', name: 'スマートスピーカー', emoji: '🔈', desc: '音声でAIと対話し、情報を得たり家電を操作したりできるスピーカー。', category: 'machine' },
    'vr_headset': { id: 'vr_headset', name: 'VRゴーグル', emoji: '🥽', desc: '仮想現実の世界に没入するためのディスプレイ装置。', category: 'machine' },
    'esports': { id: 'esports', name: 'eスポーツ', emoji: '🏆', desc: 'コンピューターゲームをスポーツ競技として捉えたもの。', category: 'tool' },
    'blockchain': { id: 'blockchain', name: 'ブロックチェーン', emoji: '🔗', desc: '取引履歴を暗号技術で鎖のように繋いだ分散型台帳補。', category: 'concept' },
    'cryptocurrency': { id: 'cryptocurrency', name: '暗号資産', emoji: '🪙', desc: 'ブロックチェーン技術を用いたデジタル通貨。', category: 'concept' },
    'quantum_computer': { id: 'quantum_computer', name: '量子コンピュータ', emoji: '💻', desc: '量子力学の原理を応用した、次世代の超高速計算機。', category: 'machine' },
    'nanomachine': { id: 'nanomachine', name: 'ナノマシン', emoji: '🦠', desc: 'ナノメートルサイズの極小ロボット。医療や精密加工に革命をもたらす。', category: 'machine' },
    'fusion_reactor': { id: 'fusion_reactor', name: '核融合炉', emoji: '☀️', desc: '地上の太陽。軽い原子核同士を融合させて莫大なエネルギーを取り出す装置。', category: 'machine' },
    'space_station': { id: 'space_station', name: '宇宙ステーション', emoji: '🛰️', desc: '地球周回軌道上に浮かぶ巨大な有人実験施設。', category: 'machine' },

    // === Moon Base Project ===
    'space': { id: 'space', name: '宇宙', emoji: '🌌', desc: '果てしなく広がる真空の世界。', category: 'concept' },
    'satellite_data': { id: 'satellite_data', name: '衛星データ', emoji: '📊', desc: '人工衛星が観測した地球や宇宙の情報。', category: 'material' },
    'moon': { id: 'moon', name: '月', emoji: '🌕', desc: '地球の唯一の衛星。静寂に包まれた世界。', category: 'concept' },
    'moon_lander': { id: 'moon_lander', name: '月着陸船', emoji: '🛸', desc: '月面に降り立つための専用船。', category: 'machine' },
    'astronaut': { id: 'astronaut', name: '宇宙飛行士', emoji: '🧑‍🚀', desc: '過酷な宇宙環境で活動する訓練された探検家。', category: 'tool' },
    'regolith': { id: 'regolith', name: 'レゴリス', emoji: '🌑', desc: '月面を覆う細かい砂。酸素や金属を含んでいる。', category: 'natural' },
    'lunar_concrete': { id: 'lunar_concrete', name: 'レゴリスコンクリート', emoji: '🧱', desc: '月から採れるレゴリスで作ったコンクリート。放射線を遮蔽する。', category: 'material' },
    'helium3': { id: 'helium3', name: 'ヘリウム3', emoji: '🎈', desc: '月面に存在する希少な同位体。未来の核融合燃料。', category: 'material' },
    'living_module': { id: 'living_module', name: '居住モジュール', emoji: '🏠', desc: '宇宙で人間が生活するための気密区画。', category: 'machine' },
    'airlock': { id: 'airlock', name: 'エアロック', emoji: '🚪', desc: '気圧差のある場所を行き来するための二重扉。', category: 'part' },
    'moon_base': { id: 'moon_base', name: '月面基地', emoji: '🎑', desc: '人類が月で暮らすための恒久的な拠点。フロンティアスピリットの結晶。', category: 'machine' },

    // === Mars Terraforming Project ===
    'electric_drill': { id: 'electric_drill', name: '電動ドリル', emoji: '🔩', desc: '硬い岩盤も貫く強力な採掘道具。', category: 'tool' },
    'fusion_drive': { id: 'fusion_drive', name: '核融合ドライブ', emoji: '🔥', desc: 'ヘリウム3の核融合エネルギーを推力に変える、恒星間航行の切り札。', category: 'part' },
    'deep_space_ship': { id: 'deep_space_ship', name: '深宇宙探査船', emoji: '🚀', desc: 'AIと核融合エンジンを搭載した、惑星間を旅する巨大な船。', category: 'machine' },
    'mars': { id: 'mars', name: '火星', emoji: '🪐', desc: '鉄錆に覆われた赤い惑星。第2の地球候補。', category: 'concept' },
    'martian_soil': { id: 'martian_soil', name: '火星の土', emoji: '🟤', desc: '酸化鉄を多く含む赤い土壌。', category: 'natural' },
    'dry_ice': { id: 'dry_ice', name: 'ドライアイス', emoji: '❄️', desc: '二酸化炭素が凍ったもの。火星の極冠に存在する。', category: 'natural' },
    'permafrost': { id: 'permafrost', name: '永久凍土', emoji: '🧊', desc: '土壌の下に凍っている水資源。', category: 'natural' },
    'dome_city': { id: 'dome_city', name: 'ドーム都市', emoji: '🏙️', desc: '過酷な環境を遮断し、地球と同じ環境を維持する都市。', category: 'machine' },
    'orbital_mirror': { id: 'orbital_mirror', name: '軌道反射鏡', emoji: '🪞', desc: '宇宙空間で太陽光を反射し、惑星を温める巨大な鏡。', category: 'machine' },
    'greenhouse_gas': { id: 'greenhouse_gas', name: '温室効果ガス', emoji: '♨️', desc: '強力な温室効果を持つ人工ガス。惑星を温暖化させる。', category: 'chemical' },
    'liquid_water': { id: 'liquid_water', name: '液体の水', emoji: '🌊', desc: '氷が溶けて生まれた水。生命の源。', category: 'natural' },
    'cyano_bacteria': { id: 'cyano_bacteria', name: 'シアノバクテリア', emoji: '🦠', desc: '光合成を行い酸素を作る微生物。過酷な環境でも生きられる。', category: 'natural' },
    'lichen': { id: 'lichen', name: '地衣類', emoji: '🌿', desc: '菌類と藻類の共生体。岩を土に変える力を持つ。', category: 'natural' },
    'forest': { id: 'forest', name: '森林', emoji: '🌲', desc: '木々が生い茂る緑の大地。酸素を生み出し、水を保つ。', category: 'natural' },
    'mars_base': { id: 'mars_base', name: '火星基地', emoji: '🏗️', desc: '赤い大地に築かれた人類の第二の故郷。', category: 'machine' },
    'blue_mars': { id: 'blue_mars', name: '青い火星', emoji: '🌎', desc: 'テラフォーミングによって水と緑に覆われた火星。人類の新たな故郷。', category: 'concept' },

    // === Military Tech Tree ===
    // Level 1: Early Firearms
    'stock': { id: 'stock', name: '銃床', emoji: '🪵', desc: '銃を安定して構えるための木製部品。', category: 'part' },
    'flint': { id: 'flint', name: '火打ち石', emoji: '🪨', desc: '叩くと火花が出る硬い石。', category: 'natural' },
    'musket': { id: 'musket', name: 'マスケット銃', emoji: '💂', desc: '火打ち石式の発火機構を持つ前装式の銃。', category: 'tool' },
    'bayonet': { id: 'bayonet', name: '銃剣', emoji: '🗡️', desc: '銃の先に取り付ける剣。接近戦も可能にする。', category: 'tool' },
    'sword': { id: 'sword', name: '剣', emoji: '⚔️', desc: '金属を鍛えて作った鋭い刃物。', category: 'tool' },
    'horse': { id: 'horse', name: '馬', emoji: '🐎', desc: '古くから人類の移動を支えてきた動物。', category: 'natural' },
    'cavalry': { id: 'cavalry', name: '騎兵', emoji: '🏇', desc: '馬に乗って戦う兵士。高い機動力を持つ。', category: 'tool' },

    // Level 2: Modern Warfare Dawn
    'armor_plate': { id: 'armor_plate', name: '装甲板', emoji: '🛡️', desc: '特殊鋼で作られた非常に頑丈な金属板。', category: 'material' },
    'machine_gun': { id: 'machine_gun', name: '機関銃', emoji: '🔫', desc: '弾丸を連続発射できる自動火器。戦場の様相を一変させた。', category: 'tool' },
    'tank': { id: 'tank', name: '戦車', emoji: '🚜', desc: '厚い装甲と大砲を持ち、無限軌道で走る陸戦の王者。', category: 'machine' },
    'submarine': { id: 'submarine', name: '潜水艦', emoji: '🚢', desc: '海中に潜って行動できる船。海軍の強力な戦力。', category: 'machine' },
    'battleship': { id: 'battleship', name: '戦艦', emoji: '⛴️', desc: '巨大な主砲と厚い装甲を持つ、かつての海の支配者。', category: 'machine' },

    // Level 3: Aerial & Missiles
    'fighter_jet': { id: 'fighter_jet', name: '戦闘機', emoji: '🚀', desc: '空中戦を行うための高速航空機。', category: 'machine' },
    'bomber': { id: 'bomber', name: '爆撃機', emoji: '✈️', desc: '地上目標を攻撃するために爆弾を搭載した大型機。', category: 'machine' },
    'missile': { id: 'missile', name: 'ミサイル', emoji: '🚀', desc: '目標まで自律誘導して飛んでいくロケット兵器。', category: 'tool' },
    'icbm': { id: 'icbm', name: '大陸間弾道ミサイル', emoji: '☢️', desc: '地球の裏側まで届く長距離弾道ミサイル。', category: 'machine' },

    // Level 4: Future Weapons
    'stealth_fighter': { id: 'stealth_fighter', name: 'ステルス戦闘機', emoji: '🦇', desc: 'レーダーに映らない形状と塗装を持つ最新鋭機。', category: 'machine' },
    'drone_swarm': { id: 'drone_swarm', name: 'ドローン群', emoji: '🐝', desc: 'AIで制御された無数のドローン。群れで行動し攻撃する。', category: 'machine' },
    'laser_cannon': { id: 'laser_cannon', name: 'レーザー砲', emoji: '⚡', desc: '高出力レーザーで目標を瞬時に焼き切る光学兵器。', category: 'tool' },
    'railgun': { id: 'railgun', name: 'レールガン', emoji: '🚅', desc: '電磁力で弾丸を超音速まで加速して撃ち出す超兵器。', category: 'tool' },

    // === Construction Tech Tree ===
    // Fundamentals
    'nail': { id: 'nail', name: '釘', emoji: '📍', desc: '木材を接合するための尖った金属。建築の基本。', category: 'part' },
    'screw_part': { id: 'screw_part', name: 'ネジ', emoji: '🔩', desc: '回転させて固定する部品。釘より強く固定できる。', category: 'part' },
    'lumber': { id: 'lumber', name: '木材（加工済）', emoji: '🪵', desc: '建築用に製材された木材。', category: 'material' },

    // Level 1: Shelter
    'tent': { id: 'tent', name: 'テント', emoji: '⛺', desc: '布と棒で作った仮設の住居。', category: 'tool' },
    'hut': { id: 'hut', name: '小屋', emoji: '🛖', desc: '木や草で作った簡素な家。', category: 'tool' },
    'log_cabin': { id: 'log_cabin', name: 'ログハウス', emoji: '🏡', desc: '丸太を組んで作った頑丈な家。温かみがある。', category: 'tool' },

    // Level 2: Classical & Infrastructure
    'stone_pillar': { id: 'stone_pillar', name: '石柱', emoji: '🏛️', desc: '石を削って作った柱。巨大建築を支える。', category: 'part' },
    'temple': { id: 'temple', name: '神殿', emoji: '🕍', desc: '神を祀るための荘厳な石造建築。', category: 'machine' },
    'castle': { id: 'castle', name: '城', emoji: '🏯', desc: '敵の攻撃を防ぐための巨大な防衛拠点。', category: 'machine' },
    'bridge': { id: 'bridge', name: '橋', emoji: '🌉', desc: '川や谷を渡るための建造物。', category: 'machine' },
    'road': { id: 'road', name: '道路', emoji: '🛣️', desc: '人や車が通るために舗装された道。', category: 'machine' },

    // Level 3: Modern City
    'apartment': { id: 'apartment', name: 'マンション', emoji: '🏢', desc: '多くの人が住む鉄筋コンクリートの集合住宅。', category: 'machine' },
    'stadium': { id: 'stadium', name: 'スタジアム', emoji: '🏟️', desc: '数万人を収容できる巨大な競技場。', category: 'machine' },
    'airport': { id: 'airport', name: '空港', emoji: '🛫', desc: '飛行機が離着陸するための施設。空の玄関口。', category: 'machine' },
    'highway': { id: 'highway', name: '高速道路', emoji: '🛣️', desc: '自動車が高速で移動するための専用道路。', category: 'machine' },

    // Level 4: Future 
    'floating_city': { id: 'floating_city', name: '海上浮遊都市', emoji: '🏙️', desc: '海の上に浮かぶ未来の都市。気候変動への答え。', category: 'machine' },
    'space_elevator': { id: 'space_elevator', name: '軌道エレベーター', emoji: '🌌', desc: '地上と宇宙ステーションをケーブルで結ぶ究極の輸送機関。', category: 'machine' },
    'underground_city': { id: 'underground_city', name: '地下都市', emoji: '🚇', desc: '地下深くに建設された都市。天変地異から守られる。', category: 'machine' },

    // === Radiation Tech Tree ===
    // Elements
    'uraninite': { id: 'uraninite', name: '閃ウラン鉱', emoji: '☢️', desc: 'ウランを主成分とする黒い鉱物。ピッチブレンド。', category: 'natural' },
    'radium': { id: 'radium', name: 'ラジウム', emoji: '✨', desc: '暗闇で光る放射性元素。キュリー夫妻によって発見された。', category: 'chemical' },
    'plutonium': { id: 'plutonium', name: 'プルトニウム', emoji: '☢️', desc: '原子炉の中で生まれる人工放射性元素。', category: 'chemical' },
    'tritium': { id: 'tritium', name: 'トリチウム', emoji: '💧', desc: '三重水素。核融合の燃料や夜光塗料に使われる。', category: 'chemical' },
    'antimatter': { id: 'antimatter', name: '反物質', emoji: '🌌', desc: '物質と衝突すると対消滅を起こし、莫大なエネルギーを放つ究極の物質。', category: 'material' },

    // Tools & Machines
    'geiger_counter': { id: 'geiger_counter', name: 'ガイガーカウンター', emoji: '📟', desc: '放射線を検知して音を鳴らす測定器。ガリガリガリ...', category: 'tool' },
    'radiotherapy': { id: 'radiotherapy', name: '放射線治療機', emoji: '🏥', desc: '放射線を使ってがん細胞を攻撃する医療機器。', category: 'machine' },
    'sterilization_device': { id: 'sterilization_device', name: '滅菌装置', emoji: '✨', desc: '放射線照射によって医療器具を完全に滅菌する装置。', category: 'machine' },
    'control_rod': { id: 'control_rod', name: '制御棒', emoji: '📏', desc: '中性子を吸収して核分裂の速度を調整する棒。', category: 'part' },
    'steam_turbine': { id: 'steam_turbine', name: '蒸気タービン', emoji: '⚙️', desc: '高温高圧の蒸気を受けて高速回転する発電機の心臓部。', category: 'machine' },
    'rtg': { id: 'rtg', name: '原子力電池', emoji: '🔋', desc: '放射性同位体の崩壊熱を電気に変える電池。宇宙探査機の心臓。', category: 'machine' },
    'particle_accelerator': { id: 'particle_accelerator', name: '粒子加速器', emoji: '🌀', desc: '素粒子を光速近くまで加速して衝突させる巨大実験施設。', category: 'machine' },

    // === Dark Side of Science ===
    // Level 1: Pollution
    'sludge': { id: 'sludge', name: '汚泥', emoji: '☠️', desc: '工場排水や生活排水が混ざり合った有毒な泥。環境汚染の象徴。', category: 'waste' },
    'smog': { id: 'smog', name: 'スモッグ', emoji: '🌫️', desc: '排気ガスと煙が混ざり合い、都市を覆う汚れた霧。', category: 'waste' },
    'acid_rain': { id: 'acid_rain', name: '酸性雨', emoji: '☔', desc: '大気汚染物質が溶け込んだ雨。森を枯らし、建物を溶かす。', category: 'natural' },

    // Level 2: Biohazard
    'mutant': { id: 'mutant', name: '変異体', emoji: '🧟', desc: '放射線や薬品によって遺伝子が書き換えられた哀れな生物。', category: 'life' },
    'virus': { id: 'virus', name: 'ウイルス', emoji: '🦠', desc: '細胞に寄生して増殖する病原体。目に見えない脅威。', category: 'life' },
    'bioweapon': { id: 'bioweapon', name: '生物兵器', emoji: '🧪', desc: '病原菌を兵器として転用した禁断の技術。', category: 'tool' },

    // Level 3: Surveillance
    'spy_satellite': { id: 'spy_satellite', name: 'スパイ衛星', emoji: '🛰️', desc: '宇宙から地上のあらゆる活動を監視する目。', category: 'machine' },
    'surveillance_camera': { id: 'surveillance_camera', name: '監視カメラ', emoji: '📹', desc: '街中に設置され、個人のプライバシーを常に見つめる装置。', category: 'machine' },
    'propaganda': { id: 'propaganda', name: 'プロパガンダ', emoji: '🗣️', desc: '大衆の思想を操作するための情報戦略。真実は隠される。', category: 'concept' },

    // Level 4: Apocalypse
    'nuclear_winter': { id: 'nuclear_winter', name: '核の冬', emoji: '❄️', desc: '核戦争の煤煙が太陽光を遮り、地球が氷河期のような寒さに閉ざされる現象。', category: 'phenomenon' },
    'doomsday_clock': { id: 'doomsday_clock', name: '終末時計', emoji: '🕰️', desc: '人類滅亡までの残り時間を象徴的に示す時計。針は深夜に近づいている。', category: 'tool' },

    // === AI Tech Tree ===
    // Level 1: Core
    'big_data': { id: 'big_data', name: 'ビッグデータ', emoji: '📊', desc: '人間には処理しきれないほどの膨大な情報。', category: 'concept' },
    'machine_learning': { id: 'machine_learning', name: '機械学習', emoji: '🧠', desc: 'データから反復的に学習し、パターンを見つけ出す技術。', category: 'concept' },
    'neural_network': { id: 'neural_network', name: 'ニューラルネットワーク', emoji: '🕸️', desc: '人間の脳神経回路を模した数理モデル。', category: 'concept' },

    // Level 2: Positive (Utopia)
    'medical_ai': { id: 'medical_ai', name: '医療AI', emoji: '🩺', desc: '膨大な症例データから、病気の診断や治療法を提案するAI。', category: 'machine' },
    'auto_translator': { id: 'auto_translator', name: '自動翻訳機', emoji: '🗣️', desc: '言葉の壁を越えて、世界中の人と会話できるデバイス。', category: 'tool' },
    'ai_assistant': { id: 'ai_assistant', name: 'AIアシスタント', emoji: '💁', desc: 'スケジュール管理から悩み相談まで、生活をサポートするAI。', category: 'tool' },

    // Level 3: Negative (Dystopia)
    'deepfake': { id: 'deepfake', name: 'ディープフェイク', emoji: '🎭', desc: 'AIによって作られた、本物そっくりの偽動画や画像。', category: 'data' },
    'cyber_attack': { id: 'cyber_attack', name: 'サイバー攻撃', emoji: '💻', desc: 'ネットワークを通じてシステムを破壊・窃取する行為。', category: 'phenomenon' },
    'ai_weapon': { id: 'ai_weapon', name: '自律兵器', emoji: '🔫', desc: '人間の判断を待たずに攻撃を行うAI搭載兵器。', category: 'machine' },

    // Level 4: Singularity
    'agi': { id: 'agi', name: '汎用人工知能', emoji: '🤖', desc: '人間のようにあらゆる課題をこなせる、真の知能。', category: 'machine' },
    'super_intelligence': { id: 'super_intelligence', name: '超知能', emoji: '✨', desc: '全人類の知能の総和を遥かに凌駕する存在。', category: 'concept' },

    // === Industrial Chemistry Tech Tree ===
    'zeolite': { id: 'zeolite', name: 'ゼオライト', emoji: '🪨', desc: '微細な穴を多数持つ石。触媒や吸着剤として使われる沸石。', category: 'natural' },
    'rhodium': { id: 'rhodium', name: 'ロジウム', emoji: '⚪', desc: 'プラチナに似た非常に希少な貴金属。強力な触媒になる。', category: 'material' },

    // Information Technology (Barcodes)
    'barcode': { id: 'barcode', name: 'バーコード', emoji: '║▌', desc: 'レーザーで読み取る縞模様の識別符号。商品の管理に使われる。', category: 'tool' },
    'qr_code': { id: 'qr_code', name: 'QRコード', emoji: '⬛', desc: 'デンソーウェーブが開発したマトリックス型二次元コード。素早く読み取れる。', category: 'tool' },

    // Money Tech Tree
    'cowrie': { id: 'cowrie', name: 'タカラガイ', emoji: '🐚', desc: '古代にお金として使われた美しい貝殻。', category: 'natural' },
    'coin': { id: 'coin', name: '硬貨', emoji: '🪙', desc: '金属で作られたお金。持ち運びに便利。', category: 'tool' },
    'paper_money': { id: 'paper_money', name: '紙幣', emoji: '💴', desc: '国家が価値を保証した紙切れ。信用が全て。', category: 'tool' },
    'credit_card': { id: 'credit_card', name: 'クレジットカード', emoji: '💳', desc: '信用で買い物ができる魔法のカード。', category: 'tool' },
    'cashless_payment': { id: 'cashless_payment', name: 'スマホ決済', emoji: '📱', desc: 'QRコードを読み取って支払う現代のスタイル。', category: 'tool' },
    'nft': { id: 'nft', name: 'NFT', emoji: '🖼️', desc: 'ブロックチェーンで所有権を証明されたデジタルデータ。', category: 'data' },

    'animal': { id: 'animal', name: '動物', emoji: '🐕', desc: '地球上の多様な生物たち。素材や力の源になる。', category: 'natural' },
    'biomass': { id: 'biomass', name: 'バイオマス', emoji: '🪵', desc: '生物由来の再生可能なエネルギー資源。', category: 'material' },
    'ocean': { id: 'ocean', name: '海洋', emoji: '🌊', desc: '地球の表面の大部分を覆う巨大な塩水の塊。', category: 'natural' },
    'fossil': { id: 'fossil', name: '化石', emoji: '🦴', desc: '太古の生物が石化したもの。', category: 'natural' },

    // === Computer Storage & Memory ===
    'magnetic_disk': { id: 'magnetic_disk', name: '磁気ディスク', emoji: '💿', desc: '磁性体を塗布した円盤。データを磁気で記録する。', category: 'part' },
    'hdd': { id: 'hdd', name: 'HDD', emoji: '💾', desc: 'ハードディスクドライブ。大容量の記憶装置。円盤が高速回転している。', category: 'part' },
    'dram_chip': { id: 'dram_chip', name: 'DRAMチップ', emoji: '⬛', desc: 'データを一時的に記憶する半導体チップ。', category: 'part' },
    'ram': { id: 'ram', name: 'メモリ', emoji: '🟩', desc: 'PCの作業領域。多いほど同時にたくさんの仕事ができる。', category: 'part' },
    'flash_memory': { id: 'flash_memory', name: 'フラッシュメモリ', emoji: '⬛', desc: '電源を切ってもデータが消えない半導体メモリ。', category: 'part' },
    'ssd': { id: 'ssd', name: 'SSD', emoji: '💾', desc: 'ソリッドステートドライブ。HDDより高速で衝撃に強い記憶装置。', category: 'part' },
};

const INDUSTRIAL_PROCESSES = [
    { id: 'cupellation', name: '灰吹法', key: 'silver', req: 'noble_lead', desc: '貴鉛からの銀精錬技術。' },
    { id: 'amalgam', name: 'アマルガム法', key: 'gold_plating', req: 'mercury', desc: '水銀を使ったメッキ技術。' },
    { id: 'carbonization', name: '乾留', key: 'coke', req: 'coal', desc: '石炭の高温処理技術。' },
    { id: 'electrolysis', name: '電気分解', key: 'sodium_hydroxide', req: 'salt_water', desc: '食塩水からソーダと塩素を得る技術。' },
    { id: 'solvay', name: 'ソルベー法', key: 'sodium_bicarbonate', req: 'ammonia', desc: 'アンモニアソーダ法による重曹製造。' },
    { id: 'ostwald', name: 'オストワルト法', key: 'nitric_acid', req: 'platinum', desc: 'アンモニア酸化による硝酸製造。' },
    { id: 'contact', name: '接触法', key: 'sulfuric_acid', req: 'fuming_sulfuric_acid', desc: '発煙硫酸を水で薄めて高純度硫酸を得る製造法。' },
    { id: 'vanadium', name: 'バナジウム精錬', key: 'vanadium_pentoxide', req: 'magnetite', desc: '磁鉄鉱からの希少金属抽出。' },
    { id: 'hydroelectric', name: '水力発電', key: 'hydroelectric_power', req: 'gear', desc: '自然のエネルギーを持続可能な電気に変える技術。' },
    { id: 'cryogenic', name: '深冷分離法', key: 'liquid_air', req: 'cooling_unit', desc: '空気を極低温で液化し、蒸留によって窒素と酸素に分離する技術。' },
    { id: 'haber_bosch', name: 'ハーバー・ボッシュ法', key: 'high_pressure_reactor', req: 'iron_catalyst', desc: '空気中の窒素を固定し、アンモニアを大量生産する革命的技術。' },
    { id: 'hall_heroult', name: 'ホール・エルー法', key: 'aluminum', req: 'electricity', desc: '溶融氷晶石中でアルミナを電気分解し、アルミニウムを得る方法。' },
    { id: 'kroll', name: 'クロール法', key: 'titanium_sponge', req: 'magnesium', desc: '塩化チタンをマグネシウムで還元してチタンを得る製錬法。' },
    { id: 'converter', name: '転炉法', key: 'steel', req: 'oxygen', desc: '溶けた鉄に酸素を吹き込み、不純物を燃焼させて鋼を作る。' },
    { id: 'cyanidation', name: '青化法', key: 'gold', req: 'sodium_hydroxide', desc: 'シアン化合物（ゲーム内では代用）を用いて金銀を溶かし出す製錬法。' },
    { id: 'zone_melting', name: 'ゾーンメルティング法', key: 'silicon_ingot', req: 'electricity', desc: '局所加熱で不純物を移動させ、超高純度シリコン結晶を作る。' },
    { id: 'steam_cracking', name: 'スチームクラッキング', key: 'ethylene', req: 'naphtha', desc: 'ナフサを高温の水蒸気で熱分解し、プラスチック原料を作る石油化学の核。' },
    { id: 'sohio', name: 'ソハイオ法', key: 'acrylonitrile', req: 'propylene', desc: 'プロピレンとアンモニアを反応させ、アクリロニトリルを合成する。' },
    { id: 'kraft', name: 'クラフト法', key: 'pulp', req: 'sodium_hydroxide', desc: '木材チップを薬品で煮て、強靭な紙パルプを取り出す製法。' },
    { id: 'kraft', name: 'クラフト法', key: 'pulp', req: 'sodium_hydroxide', desc: '木材チップを薬品で煮て、強靭な紙パルプを取り出す製法。' },
    { id: 'photolithography', name: 'フォトリソグラフィ', key: 'ic', req: 'photo_resist', desc: '光を使ってシリコンウェハー上に極微細な回路パターンを転写する技術。' },
    { id: 'photolithography', name: 'フォトリソグラフィ', key: 'ic', req: 'photo_resist', desc: '光を使ってシリコンウェハー上に極微細な回路パターンを転写する技術。' },
    { id: 'sabatier', name: 'サバティエ反応', key: 'methane', req: 'sabatier_reactor', desc: '二酸化炭素と水素を反応させ、メタンと水を生成する。宇宙での燃料調達に必須の技術。' },
    { id: 'andrussow', name: 'アンドルッソフ法', key: 'hydrogen_cyanide', req: 'platinum', desc: 'メタン、アンモニア、酸素を白金触媒で反応させ、シアン化水素を合成する。' }
];

const GREAT_INVENTIONS = {
    'fire': "暗闇に光が灯った！人類が熱を支配した瞬間だ！",
    'stone_tool': "道具を使うことで、人類は他の動物とは異なる道を歩み始めた。",
    'iron': "鉄の時代の幕開けだ！文明はより強固なものとなる。",
    'steam_engine': "シューッ！蒸気の力が世界を動かす！産業革命の始まりだ！",
    'electricity': "エネルギーの革命だ！夜は昼のように明るくなるだろう。",
    'light_bulb': "エジソンの輝きが、世界を照らし出す。",
    'car': "距離の概念が変わる！移動の自由を手に入れた。",
    'airplane': "人類がついに空を飛んだ！ライト兄弟も誇りに思うだろう。",
    'penicillin': "奇跡の薬だ！多くの命が救われることになる。",
    'computer': "計算する機械の誕生。情報時代の夜明けだ。",
    'rocket': "3...2...1... 発射！重力を振り切り、星の海へ！",
    'internet': "世界がつながった。知のネットワークが地球を覆う。",
    'ai': "思考する機械。新たな知性が産声を上げた。",
    'maglev_train': "音もなく滑る未来の列車。摩擦からの解放だ。",
    'super_conductor': "電気抵抗ゼロの世界！もはや魔法と区別がつかない。",
    'smartphone': "手のひらに世界を。誰もが常につながっている時代へ。",
    'moon_base': "地球外に初めて築かれた人類の砦。夜空を見上げれば、そこには人が住んでいる。",
    'deep_space_ship': "人類という種が、揺り籠である地球を離れる時が来た。目指すは赤い星。",
    'blue_mars': "かつて死の世界だった場所が、今や緑溢れる第2の故郷となった。テラフォーミングの完成だ。"
};

const CIVILIZATION_LEVELS = [
    { level: 0, name: '原始時代', year: '紀元前330万年', trigger: null, desc: '自然と共に生きる時代。' },
    { level: 1, name: '石器時代', year: '紀元前250万年', trigger: 'stone_tool', desc: '石を道具として使い始めた時代。' },
    { level: 2, name: '火の利用', year: '紀元前50万年', trigger: 'fire', desc: '火を操り、生活が劇的に変化した時代。' },
    { level: 3, name: '農耕の開始', year: '紀元前1万年', trigger: 'wheat', desc: '種を蒔き、収穫する。人類が定住を始めた大きな転換点。' },
    { level: 4, name: '金属器時代', year: '紀元前1200年', trigger: 'iron', desc: '強靭な鉄を手に入れ、農業や戦争が変わった時代。' },
    { level: 5, name: '中世', year: '5～15世紀', trigger: 'mechanical_clock', desc: '歯車などの機械技術が発展し、職人が活躍した時代。' },
    { level: 6, name: '大航海時代', year: '15世紀', trigger: 'compass', desc: '羅針盤を手に、未知の大海原へ乗り出した探検の時代。' },
    { level: 7, name: '印刷革命', year: '1450年頃', trigger: 'printing_press', desc: '活版印刷により、知識が爆発的に広まった時代。' },
    { level: 8, name: '産業革命', year: '1760年代', trigger: 'steam_engine', desc: '蒸気の力が世界を動かし始めた機械化の時代。' },
    { level: 9, name: '電気革命', year: '1870年代', trigger: 'light_bulb', desc: '夜を照らす光と、万能のエネルギーを手に入れた時代。' },
    { level: 10, name: '通信革命', year: '1876年', trigger: 'telephone', desc: '遠く離れた人とリアルタイムで声がつながる時代。' },
    { level: 11, name: '自動車・航空時代', year: '20世紀初頭', trigger: 'engine', desc: '内燃機関により、陸と空の移動が自由になった時代。' },
    { level: 12, name: '化学・医療の進歩', year: '1920年代', trigger: 'penicillin', desc: '抗生物質の発見により、病との戦いに勝利し始めた時代。' },
    { level: 13, name: 'プラスチック時代', year: '1950年代', trigger: 'plastic', desc: '軽くて丈夫な合成樹脂が、生活のあらゆる場面を変えた時代。' },
    { level: 14, name: 'エレクトロニクス', year: '1950年代', trigger: 'transistor', desc: '小さな半導体が、巨大な計算能力への扉を開いた時代。' },
    { level: 15, name: '原子力時代', year: '1950年代', trigger: 'nuclear_power_plant', desc: '原子核に秘められた莫大なエネルギーを制御し始めた時代。' },
    { level: 16, name: '宇宙時代', year: '1960年代', trigger: 'rocket', desc: '地球の重力を振り切り、星の海へと飛び出した時代。' },
    { level: 17, name: '情報革命', year: '1990年代', trigger: 'computer', desc: 'デジタル技術とインターネットが世界を覆い尽くした時代。' },
    { level: 18, name: 'ロボット社会', year: '2010年代', trigger: 'robot', desc: '自動化された機械が労働を担い、効率化が進む時代。' },
    { level: 19, name: 'バイオ・医療革命', year: '2020年代', trigger: 'dna_sequencer', desc: '生命の設計図を解読し、医療が新たな次元へ進んだ時代。' },
    { level: 20, name: 'AI・シンギュラリティ', year: '未来', trigger: 'ai_chip', desc: '人類を超える知性が誕生し、文明が予測不能な領域へ突入する時代。' },
    { level: 21, name: '月面開発時代', year: '未来', trigger: 'moon_base', desc: '月が地球の経済圏の一部となり、宇宙進出の足掛かりとなった時代。' },
    { level: 22, name: '惑星間航行時代', year: '未来', trigger: 'deep_space_ship', desc: '人類が多惑星種族（Multi-planetary Species）への第一歩を踏み出した時代。' },
    { level: 23, name: 'テラフォーミング', year: '未来', trigger: 'blue_mars', desc: '惑星の環境そのものを改変し、生命が住める星を自らの手で作り上げた時代。' }
];


const RECIPES = {
    // 2-Element Recipes
    'charcoal+manganese_dioxide': 'manganese_monoxide', // First reduction
    'coke+manganese_dioxide': 'manganese_monoxide', // Better reduction
    'arsenic_trioxide+charcoal+fire': ['arsenic', 'carbon_dioxide'],
    'arsenic_trioxide+coke+fire': ['arsenic', 'carbon_dioxide'],
    'air+grape': 'wine', // Grape + Air -> Wine
    'air+wine': 'vinegar', // Wine + Air -> Vinegar
    'air+urine': 'ammonia', // Decomposition

    // Sun based
    'fire+water': 'salt', // Seawater + Fire -> Salt

    // Fire based
    'fire+fresh_water': 'hot_water', // Updated
    'fire+hot_water': 'steam', // New
    'air+fire': 'energy',

    'stone+wood': 'stone_tool', // Wood + Stone -> Stone Tool
    'stone+stone_tool': 'stone_plate', // Stone + Stone Tool -> Stone Plate
    'shell+stone_tool': 'calcium_carbonate', // Shell + Stone Tool -> Calcium Carbonate
    'plant+stone_tool': 'fiber', // Plant + Stone Tool -> Fiber
    'fiber+fiber': 'string', // Fiber + Fiber -> String
    'string+wood': 'bow', // String + Wood -> Bow
    'bow+wood': 'fire', // Bow + Wood -> Fire (Primitive fire making)
    'lens+wood': 'fire', // Lens + Wood -> Fire (Focusing sunlight)
    'clay+sand': 'admixture', // Clay + Sand -> Admixture
    'admixture+fire': 'earthenware', // Admixture + Fire -> Earthenware
    'calcium_carbonate+fire+sand': 'lime_mortar', // Updated
    'fire+plant': 'plant_ash', // Plant + Fire -> Plant Ash
    'fire+seaweed': 'kelp_ash', // Seaweed + Fire -> Kelp Ash
    'hot_water+kelp_ash': ['sodium_carbonate', 'iodine'], // Kelp Ash + Hot Water -> Sodium Carbonate + Iodine
    'fire+plant_ash+sand': 'frit', // Plant Ash + Sand + Fire -> Frit
    'fire+frit': 'glass', // Frit + Fire -> Glass
    'fire+hydrogen': 'fresh_water', // Hydrogen + Fire -> Water
    'iron+salt_water': 'hand_warmer', // Iron + Prepared Saltwater -> Hand Warmer
    'fresh_water+glass_vessel': 'cup', // Water + Vessel -> Cup
    'cup+wine': 'wine_glass', // Cup + Wine -> Wine Glass
    'fresh_water+nitrogen_monoxide': 'nitrogen_dioxide', // (Simplified)
    'fresh_water+nitrogen_dioxide': 'nitric_acid', // Nitrogen Dioxide + Water -> Nitric Acid
    'graphite+stone_tool': 'graphite_shards', // Graphite + Stone Tool -> Shards
    'bamboo+stone_tool': 'bamboo_powder', // Bamboo + Stone Tool -> Powder
    'earthenware+stone_tool': 'shards', // Earthenware + Stone Tool -> Shards
    'iron+wood': 'iron_tool', // Iron + Wood -> Iron Tool
    'iron_pipe+iron_plate': 'piston', // Changed to resolve conflict with iron_pipe
    'earthenware+glass': 'glass_vessel', // Earthenware + Glass -> Glass Vessel
    'iron_tool+pencil': 'needle', // Iron Tool + Pencil -> Needle (Pencil used as guide or holder?)
    'glass+stone_tool': 'lens', // Grinding glass into a lens
    'compass_tool+paper': 'circle', // Compass + Paper -> Circle
    'fresh_water+sulfur_dioxide': 'sulfurous_acid', // Water + SO2 -> Sulfurous Acid
    'iron_sulfate+sulfurous_acid+sun': 'sulfuric_acid', // Sulfurous Acid + Sun + Iron Sulfate -> Sulfuric Acid (Catalytic)
    'air+fire+sulfur': 'sulfur_dioxide', // Updated
    'salt+sulfuric_acid': ['hydrogen_chloride', 'sodium_hydrogen_sulfate'], // Salt + Sulfuric Acid -> HCl gas
    'calcium_hydroxide+water': 'magnesium_hydroxide', // Seawater + Lime -> Mg(OH)2
    'hydrochloric_acid+magnesium_hydroxide': 'magnesium_chloride',
    'sodium_hydroxide+sulfuric_acid': ['fresh_water', 'sodium_hydrogen_sulfate'], // Acid Salt Neutralization
    'calcium_hydroxide+fresh_water+plant_ash': 'potassium_hydroxide', // Potassium Hydroxide synthesis (causticization)
    'earthenware+plant_ash': 'ash_cupel', // Ash Hearth for cupellation
    'nitric_acid+potassium_hydroxide': 'potassium_nitrate', // Neutralization
    'calcium_carbonate+hydrochloric_acid': ['calcium_chloride', 'carbon_dioxide'], // Acid + Carbonate
    'fire+iron+sulfur': 'iron_sulfide', // Iron + Sulfur + Fire -> Iron Sulfide
    'hydrochloric_acid+iron_sulfide': ['hydrogen_sulfide', 'iron_chloride'], // FeS + HCl -> H2S + FeCl2
    'carbon_dioxide+potassium_hydroxide': 'potassium_carbonate', // CO2 absorption
    'ammonia+hydrochloric_acid': 'ammonium_chloride', // Reaction
    'bamboo+glass_vessel': 'cylinder',
    'stone_tool+wood': 'rod',
    'rod+wheel': 'top',
    'acetone+chlorine': 'chloroacetone',
    'glass_vessel+glass_vessel+sand': 'hourglass',
    'carbon_dioxide+fresh_water+plant+sun': ['starch', 'oxygen'], // Photosynthesis (4 slots)
    'electricity+enameled_wire+glass_vessel': 'ozone',
    'iron+rod': 'iron_pipe',
    // 'carbon_dioxide+fresh_water': 'carbonated_water', // Duplicate removed
    'carbonated_water+sodium_hydroxide': 'sodium_bicarbonate', // Reaction to bicarbonate
    'ammonia+nitric_acid': 'ammonium_nitrate',
    'ammonia+oxygen+platinum': 'nitric_acid',
    'ammonium_nitrate+fresh_water': 'cold_pack',
    'sodium_hydroxide+vinegar': 'sodium_acetate',
    'rod+sun': 'sundial',
    'triangle+triangle': 'quadrilateral',
    'quadrilateral+wood': 'plank',
    'magnet+needle': 'compass',
    'fire+vinegar': 'ketene',
    'ketene+vinegar': 'acetic_anhydride',
    'alcohol+nitric_acid': 'nital',
    'methanol+nitric_acid': 'nital',
    'circle+circle': 'sphere',
    'iron+sphere': 'iron_ball',
    'iron_ball+wheel': 'bearing',
    'calcium_carbonate+vinegar': ['calcium_acetate', 'carbon_dioxide'],
    'sodium_silicate+sulfuric_acid': ['hydrogel', 'sodium_sulfate'],
    'sulfur_trioxide+sulfuric_acid': 'fuming_sulfuric_acid',
    'fuming_sulfuric_acid+fresh_water': 'sulfuric_acid',
    'oxygen+vanadium_hot_metal': 'vanadium_slag',
    'sodium_carbonate+vanadium_slag': 'sodium_metavanadate',
    'ammonia+fresh_water': 'ammonia_water',
    'ammonia_water+tungstic_acid': 'apt',
    'apt+fire': 'tungsten_trioxide',
    'iron+wheel_hub': 'gear',
    'bismuth+fire': 'bismuth_crystal', // Melting and cooling for crystallization

    // Triple Element Recipes
    'rod+rod+rod': 'triangle',
    'earth+fresh_water+sand': 'clay',    // Earth + Sand + Water -> Clay
    'fire+sand+sodium_carbonate': ['sodium_silicate', 'carbon_dioxide'],
    'air+hydrogel+sun': 'xerogel',
    'air+charcoal+fire': 'carbon_dioxide', // Combustion of carbon in air
    'air+coal+fire': 'carbon_dioxide',
    'air+coke+fire': 'carbon_dioxide',
    'air+fire+graphite': 'carbon_dioxide',
    'air+carbon_rod+fire': 'carbon_dioxide',

    'charcoal+fire+lead_oxide': ['noble_lead', 'carbon_monoxide'], // Reduction to noble lead
    'fresh_water+salt': 'salt_water',     // Water + Salt -> Salt Water
    'coke+fire+magnetite': 'vanadium_hot_metal',
    'oxygen+sulfur_dioxide+vanadium_pentoxide': 'sulfur_trioxide',
    'ammonium_chloride+fresh_water+sodium_metavanadate': 'ammonium_metavanadate',
    'air+ammonium_metavanadate+fire': ['vanadium_pentoxide', 'ammonia'],
    'fire+hydrochloric_acid+scheelite': 'tungstic_acid',
    'fire+hydrogen+tungsten_trioxide': 'tungsten',
    'ammonia+carbon_dioxide+salt_water': ['sodium_bicarbonate', 'ammonium_chloride'], // Solvay Process
    'battery+energy': 'electricity',       // Battery + Energy -> Electricity
    'air+electricity+electricity': 'nitrogen_monoxide', // Birkeland-Eyde process simplified
    'ammonia+fire+platinum': 'nitrogen_monoxide', // Ostwald process
    'fire+sodium_acetate+sodium_hydroxide': ['methane', 'sodium_carbonate'], // Decarboxylation
    'gear+generator+water_wheel': ['electricity', 'hydroelectric_power'],
    'air+methane+rubber_tube': 'gas_burner',
    'electricity+fresh_water+sodium_hydroxide': ['hydrogen', 'oxygen'], // Water Electrolysis
    'fire+sodium_acetate': 'anhydrous_sodium_acetate',
    'bamboo_filament+glass_vessel+vacuum_apparatus': 'light_bulb', // First bulb
    'coal+fire+potassium_hydroxide': 'activated_carbon',
    'ammonium_chloride+calcium_hydroxide+fire': ['ammonia', 'calcium_chloride'],
    'electricity+fire+magnesium_chloride': 'magnesium', // Electrolysis of molten salt
    'fuming_sulfuric_acid+hydrogen_chloride': 'chlorosulfuric_acid',
    'cylinder+needle+piston': 'syringe',
    'magnesium_chloride+sodium_bicarbonate+urine': 'struvite',
    'fire+struvite': ['ammonia', 'magnesium_diphosphate'],
    'coke+magnesium_diphosphate+sand': 'yellow_phosphorus',
    'fire+vacuum_apparatus+yellow_phosphorus': 'red_phosphorus',
    'struvite+sulfuric_acid': ['phosphoric_acid', 'magnesium_sulfate', 'ammonium_sulfate'],
    'olive+piston': 'vegetable_oil',
    'vegetable_oil+sodium_hydroxide': ['soap', 'glycerin'],
    'glycerin+nitric_acid+sulfuric_acid': 'nitroglycerin',
    'diatomaceous_earth+nitroglycerin+paper': 'dynamite',
    'potassium_nitrate+red_phosphorus+wood': 'match',
    'nitric_acid+silver': 'silver_nitrate',
    'salt_water+silver_nitrate': 'silver_chloride',
    'lens+silver_chloride+wood': 'camera',
    'camera+sun': 'photo',
    'black_powder+magnesium': 'fireworks',
    'ammoniacal_silver_nitrate+formalin+glass': 'mirror',
    'glass+sun+triangle': 'prism',
    'calcite+sun': 'polarizing_prism',
    'calcium_hydroxide+crude_wood_alcohol': 'calcium_acetate',
    'air+copper+fire': 'copper_oxide',
    'copper_oxide+fire+methanol': 'formaldehyde',
    'formaldehyde+fresh_water': 'formalin',
    'fresh_water+silver_nitrate': 'silver_nitrate_solution',
    'ammonia_water+silver_nitrate_solution': 'ammoniacal_silver_nitrate',
    'black_powder+string+vulcanized_rubber': 'fuse',
    'fire+graphite_shards+iron': 'steel',
    'coil+steel': 'spring',
    'fresh_water+hydrogen_chloride': 'hydrochloric_acid',
    'phenoxide+sulfuric_acid': 'crude_phenol',
    'barite+coke+fire': ['barium_sulfide', 'carbon_monoxide'],
    'barium_sulfide+hydrochloric_acid': ['barium_chloride', 'hydrogen_sulfide'],
    'barium_chloride+electricity+fire': ['barium', 'chlorine'],
    'ammonia+copper_oxide+fire': ['nitrogen', 'copper'],
    'fire+fresh_water+iron_vessel': 'boiler',
    'cart+rail': 'minecart',
    'admixture+box+fresh_water': 'raw_brick',
    'fire+raw_brick': 'brick',
    'coil+iron+magnet': 'motor',
    'cylinder+motor+piston': 'compressor',
    'ammonia+compressor+iron_pipe': 'cooling_unit',
    'box+cooling_unit+steel': 'refrigerator',
    'box+fresh_water+refrigerator': 'ice',
    'box+iron': 'iron_vessel',
    'cooling_unit+fire+iron_vessel': 'distillation_tower',
    'copper+fire+tin': 'bronze',
    'copper+fire+zinc': 'brass',
    'string+string': 'cloth',
    'cloth+string+wood': 'sail',
    'brass+iron_tool': 'screw',
    'iron+wheel': 'rudder',
    'rudder+screw+steam_engine': 'marine_engine',
    'marine_engine+sail+steel': 'steamship',
    'wood+wood+wood': 'raft',
    'raft+sail': 'yacht',
    'fire+lead+tin': 'solder',
    'electricity+salt_water': 'sodium_hypochlorite', // Electricity + Salt Water -> Sodium Hypochlorite
    'electricity+salt_water+shards': ['sodium_hydroxide', 'hydrogen', 'chlorine'], // Multiple outputs
    'sodium_hydroxide+sodium_hydroxide+sulfuric_acid': ['fresh_water', 'sodium_sulfate'], // Normal Salt Neutralization
    'sodium_hydroxide+sodium_hydroxide+sulfurous_acid': ['fresh_water', 'sodium_sulfite'], // Sodium Sulfite Neutralization
    'charcoal+potassium_nitrate+sulfur': 'black_powder', // Black Powder synthesis
    'electricity+manganese_dioxide+potassium_hydroxide': 'potassium_permanganate', // Permanganate Synthesis
    'graphite+potassium_permanganate+sulfuric_acid': 'graphene_oxide', // HUMMERS Method
    'clay+fire+graphite_shards': 'pencil_lead', // Clay + Fire + Graphite Shards -> Lead
    'pencil_lead+string': 'pencil', // Lead + String -> Pencil
    'needle+pencil': 'compass_tool', // Needle + Pencil -> Compass
    'lens+lens': 'glasses', // Lens + Lens -> Glasses
    'fire+plant+sodium_hydroxide': 'paper', // Soda Pulping process
    'bamboo_powder+fire+sodium_hydroxide': 'bamboo_filament', // Bamboo Filament process
    'fresh_water+salt+vinegar': 'sea_water_imitation', // Water + Salt + Vinegar -> (Experimental)
    'glass_vessel+lens+wood': 'telescope', // Lens + Vessel/Tube + Body
    'glass_vessel+lens+lens': 'microscope', // Multiple lenses for magnification
    'circle+wood': 'wheel', // Circle + Wood -> Wheel
    'fresh_water+wheel': 'water_wheel', // Water + Wheel -> Water Wheel
    'calcium_carbonate+fire': ['calcium_oxide', 'carbon_dioxide'], // Thermal Decomposition
    'calcium_oxide+fresh_water': 'calcium_hydroxide', // Slaking
    'calcium_hydroxide+carbon_dioxide': ['calcium_carbonate', 'fresh_water'], // Lime water test
    'air+fire+galena': 'lead_oxide', // Roasting
    'air+fire+sphalerite': 'zinc_oxide', // Roasting
    'iron_tool+piston+rubber': 'vacuum_pump', // Precision mechanism
    'glass_vessel+vacuum_pump': 'vacuum_apparatus', // Mechanical vacuum
    'glass_vessel+mercury': 'vacuum_apparatus', // Torricellian vacuum
    'boiler+iron_tool+piston': 'steam_engine', // Steam Engine mechanism
    'iron+iron+wood': 'rail', // Rail (Iron) + Sleepers (Wood)
    'rail+steam_engine+wheel': 'locomotive', // Final SL
    'fire+rubber+sulfur': 'vulcanized_rubber', // Goodyear process
    'iron_plate+wheel': 'wheel_hub', // Iron Plate + Wheel -> Wheel Hub
    'charcoal+vulcanized_rubber+wheel': 'tread', // Tread with carbon black
    'tread+wheel_hub': 'tire', // Final tire assembly
    'sulfuric_acid+zinc_oxide': 'zinc_sulfate', // Oxide + Acid -> Salt
    'electricity+zinc_sulfate': 'zinc', // Electrowinning
    'alcohol+glass_vessel+string': 'alcohol_lamp', // Alcohol + Glass Vessel + String -> Lamp
    'copper_sulfate+fresh_water+iron': ['iron_sulfate', 'copper'], // Displacement reaction
    'copper+lacquer+string': 'enameled_wire', // Copper + String + Lacquer -> Enameled Wire
    'enameled_wire+iron+lightning': 'magnet', // Magnetizing with lightning
    'copper+wheel': 'copper_disk', // Fabricating a disk
    'copper_disk+copper_disk+magnet': 'generator', // Faraday Disc Dynamo concept
    'generator+energy': 'electricity', // Generator + Motion -> Electricity
    'enameled_wire+iron': 'coil', // Simple coil
    'coil+electricity': 'electromagnet', // Induced magnetism
    'rubber_tree+stone_tool': 'latex', // Latex gathering
    'latex+vinegar': 'rubber', // Coagulation
    'quadrilateral+quadrilateral': 'box', // Box
    'box+iron_vessel': 'container', // Container
    'container+locomotive': 'freight_train', // Freight Train

    // Fluorine Chemistry
    'fluorite+sulfuric_acid': 'hydrogen_fluoride',
    'hydrogen_fluoride+fresh_water': 'hydrofluoric_acid',
    'hydrofluoric_acid+glass': 'etched_glass',
    'fire+naphtha': 'ethylene',
    // 'ethylene+ethylene': 'polyethylene', // Old simplified recipe
    'polyethylene+polyethylene': 'plastic_container',
    'ethylene+hydrogen_fluoride': 'teflon',
    'iron_vessel+teflon': 'frying_pan',

    // Nylon
    'benzene+hydrogen': 'cyclohexane',
    'cyclohexane+oxygen': 'adipic_acid',
    'adipic_acid+ammonia': 'hexamethylenediamine',
    'adipic_acid+hexamethylenediamine+sodium_hydroxide': 'nylon',
    'nylon+stone_tool': 'stockings',
    'cloth+nylon': 'parachute',

    // Penicillin
    'corn+stone_tool': 'flour',
    'flour+fresh_water': 'bread', // Simplified baking
    'air+bread': 'moldy_bread',
    'moldy_bread+stone_tool': 'blue_mold',
    'hot_water+seaweed': 'agar',
    'agar+glass_vessel': 'petri_dish',
    'petri_dish+blue_mold': 'penicillin',

    // Photography / Cinema
    'fish+stone_tool': 'bone',
    'bone+hot_water': 'gelatin',
    'seaweed+silver': 'silver_bromide', // Iodine/Bromine from seaweed
    'gelatin+silver_bromide': 'photographic_film', // Simplified emulsion
    'camera+photographic_film': 'exposed_film', // Taking a picture (moved from below)
    // Detailed Photo: film+light->exposed, exposed+developer->negative.
    // Let's try detailed:
    'photographic_film+sun': 'exposed_film', // Expose to light (or camera?)
    // Camera is a tool to take photo. `camera` + `photographic_film` -> `exposed_film`.
    // Recipe: `camera+photographic_film`: `exposed_film`.
    // Then `exposed_film` + `developer`: `negative`.
    // `developer` recipe needed. 
    'phenol+sodium_hydroxide': 'developer', // Hydroquinone substitute
    // 'camera+photographic_film': 'exposed_film', // Moved above
    'developer+exposed_film': 'negative', // Developing
    'negative+paper': 'photo', // Printing
    'negative+negative': 'movie_film', // Splicing
    'light_bulb+movie_film': 'projector',
    'cloth+projector': 'cinema',

    // Sulfa Drugs
    // benzene+nitric_acid+sulfuric_acid -> nitrobenzene
    'benzene+nitric_acid+sulfuric_acid': 'nitrobenzene',
    // nitrobenzene+tin+hydrochloric_acid -> aniline
    'hydrochloric_acid+nitrobenzene+tin': 'aniline',
    // aniline+acetic_anhydride -> acetanilide
    'acetic_anhydride+aniline': 'acetanilide',
    // acetanilide+chlorosulfuric_acid -> p-ASC
    'acetanilide+chlorosulfuric_acid': 'p_asc',
    // p-ASC+ammonia_water -> p-ASA
    'ammonia_water+p_asc': 'p_asa',
    // p-ASA+HCl+Fire -> Sulfanilamide HCl + Acetic Acid
    'fire+hydrochloric_acid+p_asa': ['sulfanilamide_hcl', 'vinegar'],
    // Sulfanilamide HCl + NaHCO3 -> Sulfanilamide + NaCl + H2O + CO2
    'sodium_bicarbonate+sulfanilamide_hcl': ['sulfanilamide', 'salt', 'fresh_water', 'carbon_dioxide'],

    // Ceramics
    'earthenware+fire': 'ceramics', // High temperature firing

    // Automobile
    'ceramics+electricity+iron': 'spark_plug',
    'piston+spark_plug+steel': 'engine',
    'steel+steel': 'chassis',
    'cloth+glass+steel': 'car_body',
    'chassis+engine+tire': 'drivetrain',
    'drivetrain+car_body+plante_battery+gasoline': 'car',

    // Rubber Tube & String
    // 'fiber+fiber': 'string', // Already defined above
    'string+vulcanized_rubber': 'rubber_tube',

    // Pressure & Hydraulics
    'iron+stone_tool': 'iron_plate',
    'cylinder+piston+rubber_tube': 'pump',
    'heavy_oil+iron+piston': 'hydraulic_jack',
    'heavy_oil+motor+pump': 'hydraulic_pump',
    'hydraulic_pump+iron_plate+steel': 'press_machine',

    // Acetylene
    'calcium_oxide+coke+fire': 'calcium_carbide',
    'calcium_carbide+fresh_water': ['acetylene', 'calcium_hydroxide'],

    // Manganese Battery
    'graphite+rod': 'carbon_rod',
    'hydrochloric_acid+zinc': ['zinc_chloride', 'hydrogen'],
    'fresh_water+zinc_chloride': 'zinc_chloride_solution',
    'manganese+sulfuric_acid': ['manganese_sulfate', 'hydrogen'],
    'manganese_sulfate+sulfuric_acid': 'manganese_sulfate_sulfuric_acid_solution',
    'carbon_rod+electricity+lead+manganese_sulfate_sulfuric_acid_solution': 'electrolytic_manganese_dioxide',
    'carbon_rod+electrolytic_manganese_dioxide+zinc+zinc_chloride_solution': 'manganese_battery',

    // Toilet
    'ceramics+fresh_water+iron_pipe': 'toilet',

    // Mechanical Clock
    'gear+spring+steel': 'mechanical_clock',

    // Lithium Processing
    'brine+calcium_hydroxide': ['refined_brine', 'magnesium_hydroxide', 'calcium_chloride'],
    'refined_brine+sodium_carbonate': ['lithium_carbonate', 'salt'],
    'lithium_carbonate+calcium_hydroxide': ['lithium_hydroxide', 'calcium_carbonate'],

    // Molybdenum Refining (Realistic)
    'air+fire+molybdenite': ['molybdenum_trioxide', 'sulfur_dioxide'], // Roasting with Air
    'fire+hydrogen+molybdenum_trioxide': ['molybdenum_dioxide', 'fresh_water'], // Hydrogen Reduction 1 (MoO3 -> MoO2)
    'fire+hydrogen+molybdenum_dioxide': ['molybdenum', 'fresh_water'], // Hydrogen Reduction 2 (MoO2 -> Mo)

    // Lead Acid Battery
    'lead+quadrilateral': 'lead_plate',
    'electricity+lead_plate+lead_plate+sulfuric_acid': 'plante_battery',

    // Rare Metal Recipes
    // Ferrochrome: Chromite + Coke + Electric Furnace (Fire+Electricity) -> Ferrochrome + CO2
    'chromite+coke+electricity': ['ferrochrome', 'carbon_dioxide'],

    // Ferronickel: Pentlandite + Coke + Oxygen -> Ferronickel + SO2
    'coke+oxygen+pentlandite': ['ferronickel', 'sulfur_dioxide'],

    // Nickel Refining Process (New)
    // 1. Pentlandite + Fire + Air + Sand -> Nickel Matte + SO2 + Slag
    'air+fire+pentlandite+sand': ['nickel_matte', 'sulfur_dioxide', 'slag'],
    // 2. Nickel Matte + Chlorine -> Nickel Chloride + Sulfur
    'chlorine+nickel_matte': ['nickel_chloride', 'sulfur'],
    // 3. Nickel Chloride + Water + Electricity -> Nickel + Chlorine
    'electricity+fresh_water+nickel_chloride': ['nickel', 'chlorine'],

    // Titanium (Kroll Process)
    // 1. Rutile + Coke + Chlorine -> TiCl4 + CO2
    'chlorine+coke+rutile': ['titanium_tetrachloride', 'carbon_dioxide'],
    // 2. TiCl4 + Magnesium -> Titanium Sponge + MgCl2
    'magnesium+titanium_tetrachloride': ['titanium_sponge', 'magnesium_chloride'],
    // 3. Sponge + Electricity (Arc Melting) -> Titanium
    'electricity+titanium_sponge': 'titanium',



    // Niobium
    'coke+pyrochlore': 'niobium', // Simplified reduction

    // Alloys
    // Stainless: Iron + Ferrochrome + Nickel
    'ferrochrome+iron+nickel': 'stainless_steel',

    // Inconel: Nickel + Ferrochrome + Molybdenum + Niobium
    'ferrochrome+molybdenum+nickel+niobium': 'inconel',

    // Super Conductor: Niobium + Titanium + Copper(Stabilizer)
    'copper+niobium+titanium': 'super_conductor',

    // Aluminum Chain
    // Bauxite + Sodium Hydroxide + Heat -> Alumina (Bayer Process simplified)
    'bauxite+fire+sodium_hydroxide': 'alumina',
    // Alumina + Electricity + Carbon Electrode -> Aluminum (Hall-Heroult simplified)
    'alumina+carbon_rod+electricity': ['aluminum', 'carbon_dioxide'],
    // Duralumin: Al + Cu + Mg
    'aluminum+copper+magnesium': 'duralumin',

    // Silicon & Electronics
    // SiO2 (Sand) + Coke + Electricity -> Silicon + CO
    'coke+electricity+sand': ['silicon', 'carbon_monoxide'],
    // Silicon + Electricity (Zone Melting) -> Wafer
    'electricity+silicon': 'wafer',
    // Wafer + Light (Lithography) + Gold (Wiring) -> IC
    'gold+light_bulb+wafer': 'ic',
    // IC + Al + Glass (Screen) + Motor (Fan) + Plastic (Case) -> Computer
    'aluminum+glass+ic+motor+plastic_container': 'computer',

    // Rocket Assembly
    // Engine: Inconel + Pump + Spark Plug (Igniter)
    'inconel+pump+spark_plug': 'rocket_engine',
    // Body: Duralumin + Titanium
    'duralumin+titanium': 'rocket_body',
    // Rocket: Body + Engine + Computer + Fuel(Kerosene) + Oxidizer(Liquid Oxygen/Air)
    'computer+kerosene+liquid_air+rocket_body+rocket_engine': 'rocket',

    // Launch Infrastructure
    // Cement: Calcium Carbonate + Clay + Fire
    'calcium_carbonate+clay+fire': 'cement',
    // Concrete: Cement + Water + Sand + Stone (Modern Concrete)
    'cement+fresh_water+sand+stone': 'concrete',
    // Launch Pad: Concrete + Steel + Iron Pipe
    'concrete+iron_pipe+steel': 'launch_pad',

    // Space Suit Chain
    // Airtight Fabric: Nylon + Teflon
    'nylon+teflon': 'airtight_fabric',
    // Space Helmet: Glass + Gold Plating + Duralumin
    'duralumin+glass+gold_plating': 'space_helmet',
    // PLSS: Oxygen + Manganese Battery + Pump
    'manganese_battery+oxygen+pump': 'plss',
    // Space Suit: Helmet + Airtight Fabric + PLSS
    'airtight_fabric+plss+space_helmet': 'spacesuit',

    // Smartphone Chain
    // Lithium Ore Processing
    // 1. Alpha -> Beta (Calcination)
    'fire+lithium_ore': 'lithium_ore_beta',
    // 2. Beta + Sulfuric Acid -> Lithium Sulfate (Sulfuric Acid Roasting)
    'lithium_ore_beta+sulfuric_acid': 'lithium_sulfate',
    // 3. Lithium Sulfate + Sodium Carbonate -> Lithium Carbonate + Sodium Sulfate
    'lithium_sulfate+sodium_carbonate': ['lithium_carbonate', 'sodium_sulfate'],
    // Li-ion Battery: Lithium Carbonate + Cobalt + Graphite
    'cobalt+graphite+lithium_carbonate': 'lithium_ion_battery',

    // Electronics
    // LCD: Glass + Electricity + Silicon -> Simplified
    'electricity+glass+silicon': 'lcd',
    // Touch Panel: LCD + Glass + Indium (ITO - Indium Tin Oxide)
    'glass+indium+lcd': 'touch_panel',
    // SoC: IC + IC + Gold (High integration)
    'gold+ic+ic': 'soc',

    // Semiconductor Basics
    'silicon+iron_tool': 'wafer', // Simplified wafer slicing
    // Diode: Wafer + Glass + Electrode(Copper)
    'copper+glass+wafer': 'diode',
    // Transistor: Wafer + Diode + Electrode(Copper) -> Simplified: Wafer + Copper + Plastic(package) ? 
    // Let's use: Diode + Diode + Copper -> Transistor (NPN/PNP concept simplified)
    'copper+diode+diode': 'transistor',
    // IC: Transistor + Transistor + Wafer + Light Bulb(Lithography?)
    // Existing IC recipe was light_bulb + photo_resist + wafer. Let's make Transistor a prerequisite for something or alternative.
    // Modern IC: Transistor + Photo Resist + Wafer
    'photo_resist+transistor+wafer': 'ic',

    // Transistor Radio (Alternative to Vacuum Tube Radio)
    'coil+plastic_container+transistor': 'radio',

    // Smartphone: Body(Al) + Battery + SoC + Screen + Camera
    'aluminum+camera+lithium_ion_battery+soc+touch_panel': 'smartphone',

    // Internet Chain
    // Optical Fiber: Glass + Plastic(Polyethylene or Nylon) -> Glass + Nylon (Protection)
    'glass+nylon': 'optical_fiber',
    // Server: Computer + SoC + Storage(IC/Wafer) -> Computer + SoC + Aluminum
    'aluminum+computer+soc': 'server',
    // Satellite: Solar Panel + Computer + Thruster + Gold(Insulation) + Camera(Observation)
    'camera+computer+gold+rocket_engine+solar_panel': 'satellite',
    // Internet: Server + Optical Fiber + Satellite
    'optical_fiber+satellite+server': 'internet',
    // AI: Internet + Server + Super Computer?? -> Internet + Server + SoC
    'internet+server+soc': 'ai',

    // Energy Chain
    // Solar Panel: Silicon + Glass + Aluminum + Silver(Wiring)
    'aluminum+glass+silicon+silver': 'solar_panel',
    // Solar Power Plant: Solar Panel + Solar Panel + Inverter(IC/SoC) + Battery
    'lithium_ion_battery+soc+solar_panel+solar_panel': 'solar_power_plant',

    // Nuclear Chain
    // Nuclear Fuel: Uranium Ore + Fluorite(Processing/HF) + Centrifuge(Motor/Cilinder) -> Simplified: Uranium + Acid
    'hydrofluoric_acid+uranium_ore': 'nuclear_fuel',
    // Nuclear Plant: Nuclear Fuel + Concrete + Steam Engine(Turbine) + Lead(Shielding)
    'concrete+lead+nuclear_fuel+steam_engine': 'nuclear_power_plant',

    // Missing Recipes - Gold Refining
    // Gold: Gold Dust + Fire -> Melting into pure gold
    'fire+gold_dust': 'gold',

    // Gold Ore Refining: Removed simple fire roasting. Using Cyanidation instead.
    // 'fire+gold_ore': ['gold', 'silver', 'stone'], // REMOVED
    // Alternative: Mercury amalgam then heat
    // 'fire+mercury+gold_dust': 'gold', // Removed per user request
    'cinnabar+fire': 'mercury',
    'fire+gold_dust+iron_plate+mercury': 'gold_plating',
    'copper+press_machine': 'copper_plate',

    // Chromium (from Ferrochrome with Electrolysis)
    'electricity+ferrochrome': ['chromium', 'iron'],

    // Agriculture Recipes
    // Plow: Wood + Iron
    'iron_plate+wood': 'plow',
    // Tractor: Car (Engine/Chassis) + Plow
    'car+plow': 'tractor',

    // Fertilizer: Bone Meal + Chemical (Ammonia/Sulfuric Acid) / Nitrogen
    // Bone Meal recipe not shown nearby? Let's use simple logic.
    // Ammonia + Sulfuric Acid -> Ammonium Sulfate (Fertilizer)
    'ammonia+sulfuric_acid': 'fertilizer',
    // Pesticide: Chemical + Poison concept. 
    // Simplified: Alcohol + Tobacco (if exists) or just Alcohol + Sulfuric Acid + ...? 
    // Let's use Chlorine? or just 'chemical_fertilizer' style.
    // Let's use: Copper (Bordeaux mixture concept) + Lime (Stone->Lime) + Water?
    // Simplified: Alcohol + Copper
    'alcohol+copper': 'pesticide',

    // Crops (Simplified Breeding/Farming)
    // Plant + Plow + Water -> Wheat
    'fresh_water+plant+plow': 'wheat',
    // Plant + Fertilizer + Sun -> Corn
    'fertilizer+plant+sun': 'corn',
    // Plant + Soil + Fresh Water -> Potato
    'fresh_water+plant+earth': 'potato',

    // Foods & Products
    // Bread: Wheat + Heat
    'fire+wheat': 'bread',
    // Chips: Potato + Oil + Heat. (Oil can be plant oil or simple fire for now)
    'fire+potato': 'potato_chips', // Simplified (Baked potato -> chips?)
    // Biofuel: Corn + Fermentation (Alcohol process)
    'corn+sulfuric_acid': 'biofuel', // Acid hydrolysis/fermentation simplified

    // Alcohol evolution
    // Potato + Fermentation -> Vodka (Alcohol)
    'fresh_water+potato': 'alcohol',


    // Petroleum Refining (Atmospheric Distillation)
    // Crude Oil + Distillation Tower -> LP Gas, Naphtha, Kerosene, Light Oil, Heavy Oil
    'crude_oil+distillation_tower': ['lp_gas', 'naphtha', 'kerosene', 'light_oil', 'heavy_oil'],
    // Heavy Oil Vacuum Distillation (Simplified) -> Asphalt
    'heavy_oil+distillation_tower': 'asphalt',

    // Naphtha Steam Cracking (Thermal Cracking)
    // Naphtha + Steam + Fire -> Ethylene, Propylene, Benzene
    // Naphtha Steam Cracking (Thermal Cracking)
    // Naphtha + Steam + Fire -> Ethylene, Propylene, Butadiene, Benzene, Toluene, Xylene
    // Note: Simplified output list for gameplay balance
    'fire+naphtha+steam': ['ethylene', 'propylene', 'butadiene', 'benzene', 'toluene', 'xylene'],

    // Polymerization
    'propylene+propylene': 'polypropylene', // Simplified polymerization
    'ethylene+ethylene': 'polyethylene', // Re-adding simplified recipe for tier understanding or as alternative? 
    // Wait, we have 'ethylene+titanium_tetrachloride': 'polyethylene' (Ziegler-Natta). Let's keep that as the "modern" way.
    // Maybe allow simple heat polymerization for early game? No, stick to realism.

    // Coal Carbonization (Coke Oven)
    'brick+fire+clay': 'coke_oven',
    // Coal + Coke Oven + Fire -> Coke + Coal Tar + Coal Gas
    'coal+coke_oven+fire': ['coke', 'coal_tar', 'coal_gas'],

    // Coal Tar Distillation
    // Coal Tar + Distillation Tower -> Light Oil(Benzene/Toluene), Middle Oil(Naphthalene/Phenol), Heavy Oil, Pitch
    // Coal Tar Distillation
    // Coal Tar + Distillation Tower -> Light Oil, Naphthalene, Creosote Oil, Anthracene, Pitch
    'coal_tar+distillation_tower': ['light_oil', 'naphthalene', 'creosote_oil', 'anthracene', 'pitch'],

    // Benzene Extraction
    'light_oil+distillation_tower': 'benzene',

    // Cryogenic Air Separation (深冷分離法)
    // Liquid Air: Air + Compressor + Cooling Unit
    'air+compressor+cooling_unit': 'liquid_air',
    // Separation: Liquid Air + Distillation Tower -> Nitrogen + Oxygen
    'distillation_tower+liquid_air': ['nitrogen', 'oxygen'],

    // Haber-Bosch Process (ハーバー・ボッシュ法)
    // Iron Catalyst: Magnetite + Fire + Oxygen -> Iron Catalyst
    'fire+magnetite+oxygen': 'iron_catalyst',
    // High-Pressure Reactor: Iron Vessel + Compressor + Boiler
    'boiler+compressor+iron_vessel': 'high_pressure_reactor',
    // Synthetic Ammonia: Nitrogen + Hydrogen + Iron Catalyst + High-Pressure Reactor -> Ammonia
    'high_pressure_reactor+hydrogen+iron_catalyst+nitrogen': 'ammonia',
    'high_pressure_reactor+hydrogen+iron_catalyst+nitrogen': 'ammonia',

    // Sabatier Reaction Roadmap
    // Nickel Catalyst: Nickel + Fire + Hydrogen (Activation)
    'fire+hydrogen+nickel': 'nickel_catalyst',
    // Sabatier Reactor: High Pressure Reactor + Nickel Catalyst + Heater (Coil)
    'coil+high_pressure_reactor+nickel_catalyst': 'sabatier_reactor',
    // Sabatier Process: CO2 + 4H2 -> CH4 + 2H2O (300-400°C)
    // Requires: Sabatier Reactor + Hydrogen + CO2
    'carbon_dioxide+hydrogen+sabatier_reactor': ['methane', 'fresh_water'],

    // Andrussow Process (Methane + Ammonia + Oxygen --Pt--> HCN + H2O)
    'ammonia+methane+oxygen+platinum': ['hydrogen_cyanide', 'fresh_water'],
    // Sodium Cyanide (HCN + NaOH -> NaCN + H2O)
    'hydrogen_cyanide+sodium_hydroxide': ['sodium_cyanide', 'fresh_water'],
    // Gold Cyanidation (Sodium Cyanide + Gold Ore + Oxygen + Water -> Gold)
    // Simplified: Gold Ore + Sodium Cyanide + Oxygen
    'gold_ore+oxygen+sodium_cyanide': ['gold', 'silver'],

    'hydrogen+oxygen+platinum': 'fuel_cell',
    'fuel_cell+hydrogen+oxygen': ['electricity', 'fresh_water'],

    // New Metal Refining
    // Cobalt Refining Process (New)
    // 1. Cobalt Ore + Fire + Oxygen -> Cobalt Oxide + Arsenic Trioxide + Sulfur Dioxide
    'cobalt_ore+fire+oxygen': ['cobalt_oxide', 'arsenic_trioxide', 'sulfur_dioxide'],
    // 2. Cobalt Oxide + Sulfuric Acid + Fire -> Cobalt Sulfate
    'cobalt_oxide+fire+sulfuric_acid': 'cobalt_sulfate',
    // 3. Cobalt Sulfate + Water + Electricity -> Cobalt + Oxygen
    'cobalt_sulfate+electricity+fresh_water': ['cobalt', 'oxygen'],
    // Neodymium: Monazite + Hydrochloric Acid + Electricity -> Neodymium
    'electricity+hydrochloric_acid+monazite': 'neodymium',
    // Indium: Sphalerite (Zinc Ore byproduct) + Acid + Electricity
    'electricity+hydrochloric_acid+sphalerite': ['zinc', 'indium'],

    // Aqua Regia (3 HCl + 1 HNO3)
    'hydrochloric_acid+hydrochloric_acid+hydrochloric_acid+nitric_acid': 'aqua_regia',

    // Firearms
    'alcohol+mercury+nitric_acid': 'mercury_fulminate',
    'black_powder+brass+bullet': 'cartridge', // Simplified cartridge assembly
    'black_powder+iron_pipe+wheel': 'cannon',
    'gun_barrel+rifling_machine': 'rifled_barrel',
    'cartridge+rifled_barrel+wood': 'rifle',

    // New Chemical Derivatives
    // Synthetic Rubber: Butadiene + Sodium (Catalyst/Buna) -> Rubber
    'butadiene+sodium': 'synthetic_rubber',
    // TNT: Toluene + Nitric Acid + Sulfuric Acid
    'nitric_acid+sulfuric_acid+toluene': 'tnt',
    // PET: Xylene + Ethylene + Oxygen (Simplified Terephthalic acid route)
    'ethylene+oxygen+xylene': 'pet_resin',
    // Dye (Alizarin): Anthracene + Sulfuric Acid + Sodium Hydroxide + Oxidant -> Simplified: Anthracene + Acid
    'anthracene+sulfuric_acid+sodium_hydroxide': 'alizarin',
    // Colored Cloth: Cloth + Dye
    'alizarin+cloth': 'colored_cloth',

    // Super Modern Material Recipes
    // Aramid (Kevlar): Benzene + Ammonia + Sulfuric Acid (Simplified)
    'ammonia+benzene+sulfuric_acid': 'aramid_fiber',
    'aramid_fiber+cloth': 'bulletproof_vest',

    // Aerogel: Silicon + Alcohol + Pressure Vessel (Supercritical drying)
    'alcohol+pressure_vessel+silicon': 'aerogel',

    // Fullerene: Graphite + Electricity (Arc discharge)
    'electricity+graphite+vacuum_tube': 'fullerene',

    // CNT: Fullerene + Iron/Cobalt Catalyst (Simplified to Iron Tool or similar)
    // Using Fire/Heat for CVD synthesis image
    'fire+fullerene+vacuum_apparatus': 'carbon_nanotube',

    // Epoxy: Napththa (propylene->epichlorohydrin) + Sodium Hydroxide + Bisphenol A (Phenol+Acetone)
    // Simplified: Acetone + Phenol + Sodium Hydroxide
    'acetone+phenol+sodium_hydroxide': 'epoxy_resin',

    // Space Elevator Cable
    'carbon_nanotube+epoxy_resin': 'space_elevator_cable',

    // Esterification: Ethyl Acetate
    // Acetic Acid + Ethanol + Sulfuric Acid (Catalyst) + Sodium Bicarbonate (Neutralization/Washing)
    // Esterification: Ethyl Acetate
    // Acetic Acid + Ethanol + Sulfuric Acid (Catalyst) + Sodium Bicarbonate (Neutralization/Washing)
    'alcohol+glacial_acetic_acid+sodium_bicarbonate+sulfuric_acid': 'ethyl_acetate',

    // 3D Printer Roadmap
    // Stepper Motor: Magnet + Coil (Copper) + IC
    'coil+ic+magnet': 'stepper_motor',

    // Nozzle: Copper (or Brass) + Iron Tool (Drill)
    'copper+iron_tool': 'nozzle',

    // Filament: Nylon or Popyethylene or PLA
    'nylon+heat_exchanger': 'filament', // Using heat exchanger as "extruder" metaphor for raw material
    // Or simply: Nylon + Fire (Heat) -> Filament (Simplified)
    'fire+nylon': 'filament',

    // PLA: Biomass (Starch) + Sulfuric Acid (Catalyst for fermentation/processing) -> Lactic Acid -> PLA
    // Simplified: Biomass + Sulfuric Acid -> PLA
    'biomass+sulfuric_acid': 'pla',
    'fire+pla': 'filament',

    // Chocolate Production Chain
    // Sugar: Sugarcane + Fire (Boiling) + Water + Pot -> Sugar + Molasses + Bagasse
    'earthenware+fire+fresh_water+sugarcane': ['sugar', 'molasses', 'bagasse'],

    // Bio Industry from Sugarcane
    // Bioethanol: Molasses + Water -> Alcohol
    'fresh_water+molasses': 'alcohol',

    // Bioethylene: Alcohol + Sulfuric Acid (Dehydration) -> Ethylene
    'alcohol+sulfuric_acid': 'ethylene',

    // Bio Plastic: Ethylene + Plant (Biomass) -> Bio Plastic
    'ethylene+plant': 'bio_plastic',

    // Bagasse Paper: Bagasse + Sodium Hydroxide (Pulping)
    'bagasse+sodium_hydroxide': 'paper',
    // Milk: Animal -> Simplified
    'animal+fresh_water': 'milk',
    // Cacao Mass: Cacao + Fire (Roasting) + Press Machine (Grinding)
    'cacao+fire+press_machine': 'cacao_mass',
    // Cacao Butter: Cacao Mass + Press Machine (Extraction)
    'cacao_mass+press_machine': ['cacao_butter', 'cocoa_powder'],
    // Chocolate: Cacao Mass + Sugar + Cacao Butter
    'cacao_butter+cacao_mass+sugar': 'chocolate',
    // Hot Chocolate: Cocoa Powder + Milk + Hot Water
    'cocoa_powder+hot_water+milk': 'hot_chocolate',

    // Cola Recipes
    // Carbonated Water: Water + Carbon Dioxide
    'carbon_dioxide+fresh_water': 'carbonated_water',
    // Caramel: Sugar + Fire
    'fire+sugar': 'caramel',
    // Cola Nut: Plant + Spice (Simplified origin)
    'plant+spice': 'cola_nut',
    // Cola Syrup: Cola Nut + Spice + Sugar + Caramel
    'caramel+cola_nut+spice+sugar': 'cola_syrup',
    // Cola: Cola Syrup + Carbonated Water
    'carbonated_water+cola_syrup': 'cola',

    // 3D Printer: Stepper Motor + Nozzle + IC + Aluminum (Frame)
    'aluminum+ic+nozzle+stepper_motor': '3d_printer',

    // Fabrication
    '3d_printer+filament': 'plastic_model',

    // LED Roadmap
    // Elements: Gallium (from Aluminum process/Bauxite), Arsenic (from Zinc/Copper process)
    'aluminum+electricity': 'gallium', // Simplified byproduct


    // Compound Semiconductors
    'arsenic+gallium': 'gallium_arsenide',
    'ammonia+gallium': 'gallium_nitride', // Ga + NH3 -> GaN + H2

    // LEDs
    // Red: GaAs + Diode structure
    'diode+gallium_arsenide': 'red_led',
    // Blue: GaN + Sapphire substrate (Alumina) + Diode
    // Simplified: GaN + Glass + Diode -> Blue LED
    'diode+gallium_nitride+glass': 'blue_led',

    // White: Blue LED + Phosphor (Zinc Sulfide or YAG)
    'blue_led+zinc_sulfide': 'white_led',

    // Products
    'glass+white_led': 'led_bulb',
    'blue_led+red_led+white_led+wire': 'illumination',

    // Textile Industry Recipes
    // Materials
    'fresh_water+plant+sun': 'cotton', // Simplified agriculture
    'animal+fossil': 'wool', // Removed: Unscientific
    // Let's deduce wool from Animal + Knife or something
    'animal+iron_tool': 'wool',

    'animal+plant': 'cocoon', // Silkworm eating plant
    'cocoon+hot_water': 'raw_silk', // Boiling cocoons
    'pet_resin+press_machine': 'polyester', // Fiber spinning

    // Tools
    'wood+wheel': 'spinning_wheel',
    'wood+thread': 'loom',
    'iron+gear+press_machine': 'sewing_machine', // Simplified

    // Threads & Fabrics
    'cotton+spinning_wheel': 'thread', // Cotton thread (generic thread)
    'wool+spinning_wheel': 'thread', // Wool yarn is also thread here? Or separate? Let's use generic thread for simplicity or add yarn.
    // Actually, let's keep 'thread' generic for now to link with existing recipes.

    'raw_silk+loom': 'silk_cloth',
    'thread+loom': 'cloth', // Generic cloth creation

    // Denim: Cotton + Indigo (Dye) -> We don't have Indigo item yet. Use Blue Paint or just Cotton+Loom=Cloth, then Cloth+Blue?
    // Let's add 'indigo' or simplify: Cotton + Loom + Blue_LED?? No.
    // Let's assume 'thread + loom' makes Cloth. 
    // Denim: Cloth + Paint? Or Cotton + Spinning -> Thread. Thread + Thread -> Thick Thread. 
    // Simplified: Cotton + Loom + Flower (Indigo plant metaphor) -> Denim
    'cotton+flower+loom': 'denim',

    // Clothes
    'denim+sewing_machine': 'jeans',
    'cloth+sewing_machine': 'clothes', // Generic clothes fallback or new item? 'clothes' exists? Check.
    // Checking grep results... user didn't show 'clothes' def. Assuming we need to add or it exists.
    // Let's add 'dress' and 'kimono'
    'silk_cloth+sewing_machine': 'dress',
    'silk_cloth+sewing_machine+thread': 'kimono', // Differentiate recipes

    // Polyester use
    'polyester+loom': 'cloth', // Synthetic cloth

    // Radio Technology Recipes
    // Capacitor: Aluminum + Insulation (Paper/Plastic/Ceramic) + Aluminum
    // Simplified: Aluminum + Paper
    'aluminum+paper': 'capacitor',

    // Antenna: Wire + Iron Pipe (Rod)
    'iron_pipe+wire': 'antenna',

    // Microphone: Magnet + Coil + Diaphragm (Plastic/Paper)
    'coil+magnet+plastic': 'microphone',
    // Speaker: Magnet + Coil + Cone (Paper) + Box
    'coil+magnet+paper': 'speaker',

    // Transceiver: Microphone + Speaker + Antenna + Radio Circuit (Transistor/IC)
    'antenna+microphone+radio+speaker': 'transceiver',

    // Radar: Antenna + CRT (Display) + Transistor (Circuit) + Electricity
    'antenna+crt+electricity+transistor': 'radar',

    // Microwave Oven: Radar (Magnetron source) + Iron Box (Shielding) + Glass
    // Simplified: Radar + Iron + Glass
    'glass+iron_tool+radar': 'microwave_oven',

    // Wi-Fi: Internet + Antenna + IC
    'antenna+ic+internet': 'wifi_router',

    // GPS: Satellite (Signal source concept) + Antenna + IC + Display
    // Simplified: Antenna + IC + Map? Or Screen.
    'antenna+ic+lcd': 'gps_receiver',

    // Thermometer Recipes
    // Galileo Thermometer: Glass + Water + Sphere (colored balls)
    'glass_vessel+sphere+water': 'galileo_thermometer',
    // Mercury Thermometer: Glass Tube + Mercury
    'glass+mercury': 'mercury_thermometer',
    // Alcohol Thermometer: Glass Tube + Alcohol (Ethanol)
    'alcohol+glass_vessel': 'alcohol_thermometer',
    // Thermistor: Semiconductor (Wafer) + Metal Oxide (Simplified: Manganese Dioxide or similar)
    'copper+manganese_dioxide+wafer': 'thermistor',
    // Digital Thermometer: Thermistor + IC + LCD
    'ic+lcd+thermistor': 'digital_thermometer',
    // Infrared Thermometer: Lens + Thermistor + IC
    'ic+lens+thermistor': 'infrared_thermometer',

    // Robotics Recipes
    // Sensor: Semiconductor (Wafer) + Rare Metal (Selenium/Cadmium etc) -> Simplified: Wafer + Light? Or Thermistor + Photoresist?
    // Simplified: IC + Lens (Visual sensor)
    'ic+lens': 'sensor',
    // Actuator: Motor + Gear
    // Motor (Electric Motor) recipe checks... magnet+coil... let's assume motor exists or use stepper_motor
    // Using stepper_motor for precision
    'gear+stepper_motor': 'actuator',
    // AI Chip: Wafer + Design (Computer) ... Simplified: IC + Electricity + ...? 
    // Let's use: IC + IC + Gold (Wiring)
    'gold+ic': 'ai_chip',
    // Robot: Actuator + Sensor + AI Chip + Battery (Li-ion) + Metal (Steel/Aluminum)
    // Simplified: Actuator + AI Chip + Aluminum
    'actuator+ai_chip+aluminum': 'robot',
    // Android: Robot + Silicone (Skin? Rubber) + AI Chip
    // Simplified: Robot + Synthetic Rubber + AI Chip
    'ai_chip+robot+synthetic_rubber': 'android',

    // Music Recipes
    // Guitar: Wood + String -> Lumber + String
    'lumber+string': 'guitar',
    // Electric Guitar: Guitar + Microphone (Pickup) + Iron (Strings/Parts)
    // Simplified: Guitar + Microphone
    'guitar+microphone': 'electric_guitar',
    // Piano: Wood + Iron + String (Strings)
    'iron+string+wood': 'piano',
    // Synthesizer: IC + Keyboard (Piano keys idea) + Speaker
    // Simplified: Piano + IC + Speaker
    'ic+piano+speaker': 'synthesizer',

    // FAX Roadmap
    // Photodiode: Diode + Glass (Light exposure window)
    'diode+glass_vessel': 'photodiode',
    // Scanner: Photodiode + Stepper Motor + Glass (platen) + Light (LED/Lamp)
    // Simplified: Photodiode + Stepper Motor + Glass + White LED
    'glass+photodiode+stepper_motor+white_led': 'scanner',
    // Printer: Stepper Motor + Ink/Thermal Head + Roller
    // Simplified: Stepper Motor + Black Powder (Ink metaphor) + Paper? No paper item? Use Wood Chip/Pulp -> Paper?
    // Let's assume 'paper' is needed. We have 'wood_chip', 'pulp'. Let's make Paper recipe.
    'paper+stepper_motor': 'printer', // Simplified printer

    // Modem: IC + Speaker + Microphone (Acoustic coupler concept)
    'ic+microphone+speaker': 'modem',

    // FAX: Scanner + Printer + Modem + Telephone
    'modem+printer+scanner+telephone': 'fax_machine',

    // Recording Media Recipes
    // Record: PVC + Press Machine (Stamping)
    'press_machine+pvc': 'record',
    // Phonograph: Needle (Iron/Diamond) + Speaker (Horn) + Motor
    'iron_tool+speaker+stepper_motor': 'phonograph', // Simplified
    // Cassette Tape: Plastic + Magnetic Material (Iron Oxide)
    'iron_sulfide+plastic': 'cassette_tape', // Iron Sulfide/Oxide substitute

    // Laser: Ruby + Light + Mirror? Or Diode + Lens
    // Simplified: Ruby + Diode
    // Ruby definition missing? Use 'aluminum_oxide' (Corundum) + 'chromium' (Trace) -> Ruby?
    // Let's assume Diode + Lens + Electricity -> Laser (Semiconductor laser)
    'diode+electricity+lens': 'laser',

    // Polycarbonate: Bisphenol A + Phosgene... Simplified: Plastic + Chemical?
    // Let's use Phenol + Acetone -> Bisphenol A -> PC
    // Simplified: Phenol + Acetone + Press Machine
    'acetone+phenol+press_machine': 'polycarbonate',

    // CD: Polycarbonate + Aluminum (Reflective layer) + Laser (Writing)
    'aluminum+laser+polycarbonate': 'compact_disc',
    // CD Player: Laser + Motor + Speaker + IC
    'ic+laser+speaker+stepper_motor': 'cd_player',

    // DVD: Red Laser (same as CD laser but precise) + Polycarbonate
    // Simplified: CD + Laser (Double layer?)
    // Let's make it: Polycarbonate + Laser + Laser 'dvd'
    'compact_disc+laser': 'dvd',

    // Blu-ray: DVD + Blue LED (Blue Laser source)
    'blue_led+dvd': 'blu_ray',

    // Printer Technology Recipes
    // Ink: Coal (Carbon) + Oil
    'coal+vegetable_oil': 'ink',
    // Movable Type: Lead + Press Machine (Casting?) or just Lead + Fire + Mold
    // Simplified: Lead + Iron Tool (Chisel/Mold concept)
    'iron_tool+lead': 'movable_type',
    // Printing Press: Movable Type + Wood (Frame) + Ink + Paper
    'ink+movable_type+paper+wood': 'printing_press',

    // Typewriter: Iron Tool + Ink (Ribbon) + Paper
    'ink+iron_tool+paper': 'typewriter',

    // Toner: Plastic + Coal (Carbon)
    'coal+plastic': 'toner',
    // Laser Printer: Laser + Toner + Stepper Motor + Static Electricity (Amber?) 
    // Simplified: Laser + Toner + Stepper Motor
    'laser+stepper_motor+toner': 'laser_printer',

    // Radar & Sonar Recipes
    // Magnetron: Magnet + Vacuum Tube + Copper (Anode)
    'copper+magnet+vacuum_tube': 'magnetron',

    // Radome: Fiberglass or Plastic Dome
    // Simplified: Glass Fiber + Plastic
    'glass+plastic': 'radome',

    // Hydrophone: Microphone (Waterproof) + Rubber (Sealing)
    'microphone+rubber': 'hydrophone',

    // Sonar: Hydrophone + Speaker + IC (Signal Processing)
    'hydrophone+ic+speaker': 'sonar',

    // Fish Finder: Sonar + LCD
    'lcd+sonar': 'fish_finder',

    // Depth Sounder: Sonar + Display (Simpler)
    'crt+sonar': 'depth_sounder',

    // Ultrasound: high frequency sonar + medical application
    // Simplified: Sonar + Sensor + LCD
    'lcd+sensor+sonar': 'ultrasound',

    // Modern Medicine Recipes
    // Penicillin: Mold (Plant/Organism) + Sugar + Fermentation
    // Simplified: Plant + Sugar + Alcohol (Fermentation byproduct)
    // Simplified: Plant + Sugar + Alcohol (Fermentation byproduct)

    // Vaccine: Weakened Virus (Animal or Culture) + Syringe
    // Simplified: Animal + Syringe
    'animal+syringe': 'vaccine',

    // Syringe: Glass Tube + Needle (Iron)
    'glass_vessel+iron': 'syringe',

    // Scalpel: Steel + Fire (Forging/Sharpening)
    'fire+steel': 'scalpel',

    // Anesthesia: Chloroform + Cloth (Application method)
    'chloroform+cloth': 'anesthesia',

    // CT Scanner: X-ray Machine + Computer + Motor (Rotation)
    'computer+stepper_motor+x_ray_machine': 'ct_scanner',

    // Endoscope: Lens + Light (LED) + Camera (Sensor) + Flexible Tube (Rubber)
    'lens+rubber+sensor+white_led': 'endoscope',

    // Defibrillator: Capacitor + Electrode (Iron/Copper) + Battery
    'capacitor+copper+lithium_ion_battery': 'defibrillator',

    // Stethoscope: Rubber Tube + Metal (Iron) + Diaphragm (Plastic)
    'iron+plastic+rubber_tube': 'stethoscope',

    // Artificial Heart: Pump + Titanium + Battery
    'lithium_ion_battery+pump+titanium': 'artificial_heart',

    // Dialysis Machine: Filter (Membrane) + Pump + Tube
    // Simplified: PVC Pipe + Pump + Sensor
    'pump+pvc_pipe+sensor': 'dialysis_machine',

    // DNA Sequencer: Laser + Computer + Fluorescent Dye (Chemical)
    // Simplified: Computer + Laser + Sensor
    'computer+laser+sensor': 'dna_sequencer',

    // Wood Preservation
    'creosote_oil+wood': 'lumber', // Preserved wood? Or just make wood last longer? Let's assume it makes 'lumber' or similar if we had it. For now, maybe just 'wood' (restoration) or skip recipe integration if no target item. 
    // Let's add 'railroad_tie' (sleepers) later if needed. For now Creosote is the product.
    'fiber+nitric_acid+sulfuric_acid': 'nitrocellulose', // Smokeless Powder
    // 'iron_pipe+match+wood': 'matchlock_gun', // Duplicate/Near-duplicate
    // 'black_powder+iron_pipe+wheel': 'cannon', // Duplicate
    // 'iron_pipe+press_machine': 'rifled_barrel', // Removed: Use rifling machine
    'lead+press_machine': 'bullet',
    // Modern Cartridge uses Smokeless Powder
    'brass+bullet+mercury_fulminate+nitrocellulose': 'cartridge',

    // Vinyl Chloride Tree
    'acetylene+hydrogen_chloride': 'vinyl_chloride',
    'vinyl_chloride+vinyl_chloride': 'pvc',
    'formaldehyde+hydrochloric_acid+phenol': ['bakelite', 'fresh_water'],
    'iron_tool+pvc': 'pvc_pipe',

    // Advanced Chemistry Recipes
    'nitric_acid+phenol+sulfuric_acid': 'picric_acid',
    'carbon_dioxide+phenol+sodium_hydroxide': 'salicylic_acid',
    'acetic_anhydride+salicylic_acid': 'aspirin',

    // Methyl Salicylate: Salicylic Acid + Methanol + Sulfuric Acid (Catalyst)
    'methanol+salicylic_acid+sulfuric_acid': 'methyl_salicylate',
    'alcohol+sodium_hypochlorite': 'chloroform',
    'acetone+sodium_hypochlorite': 'chloroform',
    'electricity+sodium_hydroxide': 'sodium',
    'electricity+hydrogen_fluoride': 'fluorine',
    'ammonia+carbon_dioxide+high_pressure_reactor': 'urea',
    'bone+stone_tool': 'bone_meal',
    'bone_meal+sulfuric_acid': 'superphosphate',
    'alcohol+alcohol+sulfuric_acid': ['diethyl_ether', 'fresh_water'],
    'fire+sodium_bicarbonate+sodium_bicarbonate': ['sodium_carbonate', 'carbon_dioxide', 'fresh_water'],
    'hot_water+soap': 'soap_bubbles',

    // Clock Evolution Recipes
    'iron_ball+string': 'pendulum',
    'gear+pendulum+wood': 'pendulum_clock',
    'brass+compass+mechanical_clock': 'chronometer',
    'battery+lcd+wafer': 'quartz_clock',
    'ai+quartz_clock+server': 'atomic_clock',
    'box+tire': 'cart',
    // Modern Realistic Recipes
    'ethylene+titanium_tetrachloride': 'polyethylene',
    'glass+sand': 'quartz_crucible',
    'silicon+quartz_crucible+fire': 'silicon_ingot',
    'silicon_ingot+iron_tool': 'wafer',
    'alumina+fluorite+electricity': 'aluminum',
    // Maglev Recipes
    'air+cooling_unit': 'liquid_air',
    'nitrogen+cooling_unit': 'liquid_nitrogen',
    'niobium+titanium+liquid_nitrogen': 'super_conductor',
    'concrete+coil+electricity': 'guideway',
    'duralumin+super_conductor+guideway': 'maglev_train',
    // AC Recipes
    // 'copper+iron_tool': 'copper_plate', // Use Press Machine
    'copper_pipe+aluminum': 'heat_exchanger',
    'hydrofluoric_acid+chloroform': 'refrigerant',
    'compressor+heat_exchanger+refrigerant': 'heat_pump',
    'heat_pump+electricity+plastic_container': 'air_conditioner',
    'silicon+copper+electricity': 'peltier_element',
    'peltier_element+battery': 'wearable_thermo_device',
    // Food Tech Recipes
    'iron_plate+tin': 'tin_plate',
    'tin_plate+press_machine': 'can',
    'can+fish+fire': 'canned_food',
    // Vehicle Recipes
    // 'iron+iron_tool': 'propeller', // Collision with nail
    'plank+iron_tool': 'propeller',
    'cloth+box+fire': 'hot_air_balloon',
    'cloth+hydrogen+propeller': 'airship',
    'duralumin+engine+propeller': 'airplane',
    'bearing+duralumin+engine+propeller': 'helicopter',
    'titanium_sponge+press_machine': 'titanium_plate',
    'titanium_plate+compressor+kerosene': 'jet_engine',
    'duralumin+jet_engine+glass': 'jet_plane',
    // 'lithium_hydroxide+carbon_rod+aluminum': 'lithium_ion_battery', // Duplicate removed
    'car_body+motor+lithium_ion_battery': 'electric_car',
    'bearing+ic+motor+plastic_container+propeller': 'drone',
    // 'iron_plate+iron_tool': 'iron_pipe', // Removed duplicate (defined elsewhere or use iron+rod)
    'wheel+wheel+iron_pipe+gear': 'bicycle',
    'bicycle+engine+gasoline': 'motorcycle',
    // Refinement
    'cassiterite+coal': 'tin',

    'animal+stone_tool': 'meat', // Changed from bird to animal
    'plant+plant': 'soybean',
    'soybean+corn+salt+moldy_bread': 'soy_sauce',
    'aluminum+polyethylene': 'retort_pouch',

    // Tea Time Roadmap
    // 1. Tea Processing
    'hot_water+tea_leaf': 'green_tea', // Green Tea
    'tea_leaf+sun': 'black_tea_leaf', // Fermentation (Sun drying/oxidizing metaphor)
    'black_tea_leaf+hot_water': 'black_tea', // Black Tea
    'black_tea+milk+sugar': 'milk_tea', // Milk Tea

    // 2. Sweets
    'stone_tool+wheat': 'flour', // Grinding wheat
    'fire+flour+sugar': 'cookie', // Simple cookie
    'fire+flour+milk+sugar': 'cake', // Cake base (simplified)

    // Coffee Chain
    'coffee_bean+fire': 'roasted_coffee_bean', // Roasting
    'roasted_coffee_bean+stone_tool': 'coffee_powder', // Grinding
    'coffee_powder+hot_water': 'coffee', // Drip
    'coffee+milk': 'latte',
    'coffee+ice': 'iced_coffee',

    'retort_pouch+meat+spice+hot_water': 'retort_food',
    'meat+hydrochloric_acid+sodium_hydroxide': 'culture_medium',
    'meat+culture_medium+petri_dish': 'cultured_meat',
    'vacuum_pump+refrigerator': 'freeze_dryer',
    'retort_food+freeze_dryer': 'space_food',
    // New Technologies Recipes
    'light_bulb+copper': 'vacuum_tube', // Electrode needed, simplified to copper
    'vacuum_tube+coil+plastic_container': 'radio',
    'magnet+coil+iron_plate': 'telephone',
    'zinc+sulfur': 'zinc_sulfide',
    'vacuum_tube+magnet+zinc_sulfide': 'crt',
    'crt+radio+glass': 'television',
    'wood+cloth': 'bed',
    'super_conductor+computer+bed': 'mri',
    'vacuum_tube+electricity+photographic_film': 'x_ray_machine',
    'concrete+steel': 'reinforced_concrete',
    'steel+press_machine': 'wire',
    'motor+box+wire': 'elevator',
    'reinforced_concrete+glass+elevator': 'skyscraper',
    // Advanced Process Recipes
    'ammonia+oxygen+propylene': 'acrylonitrile', // Sohio process
    'acrylonitrile+fire': 'carbon_fiber',
    'lumber+stone_tool': 'wood_chip',
    'sodium_hydroxide+sulfurous_acid+wood_chip': 'pulp', // Kraft process
    'press_machine+pulp': 'paper',
    'naphtha+sulfuric_acid': 'photo_resist', // Simplified Resist synthesis
    'light_bulb+photo_resist+wafer': 'ic', // Photolithography step

    // === Bluetooth Recipes ===
    'antenna+capacitor+ic': 'rf_module',
    'quartz_clock+rf_module+soc': 'bluetooth_chip',
    'bluetooth_chip+lithium_ion_battery+plastic+speaker': 'wireless_earphones',
    'bluetooth_chip+box+lithium_ion_battery+speaker': 'bluetooth_speaker',
    'bluetooth_chip+lcd+lithium_ion_battery+sensor': 'smart_watch',
    'ai_chip+bluetooth_chip+wifi_router': 'smart_home_hub',
    'iron_plate+plastic+spring': 'switch',
    'bluetooth_chip+plastic+switch': 'game_controller',

    // === Morse Code Recipes ===
    'brass+wood': 'telegraph_key',
    'electromagnet+telegraph_key+wire': 'telegraph',
    'antenna+coil+telegraph': 'wireless_telegraph',

    'gold+palladium': 'white_gold',
    'gold+iridium': 'fountain_pen',
    'antimony+lead+tin': 'type_metal',
    'fire+magnesium': 'flash_powder',
    'calcium_oxide+water': 'magnesium',
    'magnesium+press_machine': 'magnesium_ribbon',





    // === Future Tech Recipes ===
    // Game Console: Computer + Game Controller + TV (Connection) -> Simplified: Computer + Controller
    'computer+game_controller': 'game_console',
    // Robot Vacuum: Motor + Sensor + Lithium Ion Battery + Plastic
    'lithium_ion_battery+motor+plastic+sensor': 'robot_vacuum',
    // Smart Speaker: Speaker + Microphone + AI Chip + Wi-Fi
    'ai_chip+microphone+speaker+wifi_router': 'smart_speaker',
    // VR Headset: Smartphone (Display/Sensor) + Lens + Plastic + Switch
    'lens+plastic+smartphone+switch': 'vr_headset',
    // eSports: Game Console + Internet + VR Headset (Immersion)
    'game_console+internet+vr_headset': 'esports',
    // Blockchain: Internet + Server + Cryptography (Math/Code) -> Simplified: Internet + Server + AI Chip
    'ai_chip+internet+server': 'blockchain',
    // Cryptocurrency: Blockchain + Electricity (Mining)
    'blockchain+electricity': 'cryptocurrency',
    // Quantum Computer: Super Conductor + Laser + Computer + Liquid Nitrogen (Cooling)
    'computer+laser+liquid_nitrogen+super_conductor': 'quantum_computer',
    // Nanomachine: Carbon Nanotube + AI Chip + Microscope (Manipulation)
    'ai_chip+carbon_nanotube+microscope': 'nanomachine',
    // Fusion Reactor: Super Conductor + Electromagnet + Concrete (Shield) + Heavy Water (Deuterium source, simplified to Hydrogen/Water)
    // Simplified: Super Conductor + Electromagnet + Hydrogen + Concrete
    'concrete+electromagnet+hydrogen+super_conductor': 'fusion_reactor',
    // Space Station: Rocket + Solar Panel + Airtight Fabric + Space Food (Long stay)
    // 'airtight_fabric+rocket+solar_panel+space_food': 'space_station', // Removed in favor of modular recipe

    // === Moon Base Roadmap Recipes ===

    // Phase 1: Space Frontier
    // Launch: Rocket + Launch Pad -> Space
    'launch_pad+rocket': 'space',
    // Satellite Data: Satellite + Computer
    // 'computer+satellite': 'satellite_data', // Duplicate removed, use antenna version

    // Phase 2: Lunar Landing
    // Discovery: Space + Telescope -> Moon
    'space+telescope': 'moon',
    // Moon Lander: Rocket Engine + Computer + Rocket Body
    'computer+rocket_body+rocket_engine': 'moon_lander',
    // Astronaut: Spacesuit + Moon Lander
    'moon_lander+spacesuit': 'astronaut',

    // Phase 3: ISRU (In-Situ Resource Utilization)
    // Regolith: Astronaut + Moon
    'astronaut+moon': 'regolith',
    // Oxygen from Regolith: Electricity + Regolith
    'electricity+regolith': ['oxygen', 'silicon', 'iron', 'aluminum'],
    // Helium 3: Distillation Tower + Regolith
    'distillation_tower+regolith': 'helium3',
    // Lunar Concrete: 3D Printer + Regolith
    '3d_printer+regolith': 'lunar_concrete',

    // Phase 4: Moon Base Construction
    // Living Module: Airtight Fabric + Glass + Lunar Concrete
    // 'airtight_fabric+glass+lunar_concrete': 'living_module', // Removed in favor of generic aluminum version
    // Airlock: Iron Plate + Motor + Sensor
    'iron_plate+motor+sensor': 'airlock',
    // Moon Base: Airlock + Living Module + Solar Power Plant + Oxygen
    'airlock+living_module+oxygen+solar_power_plant': 'moon_base',

    // === Mars Terraforming Recipes ===

    // Phase 1: Interplanetary Voyage
    // Electric Drill: Motor + Screw + Titanium
    // 'motor+screw+titanium': 'electric_drill', // Removed in favor of battery/tungsten version
    // Fusion Drive: Fusion Reactor + Helium 3 + Rocket Engine
    // 'fusion_reactor+helium3+rocket_engine': 'fusion_drive', // Removed fuel requirement for parts
    // Deep Space Ship: AI Chip + Fusion Drive + Space Station
    'ai_chip+fusion_drive+space_station': 'deep_space_ship',
    // Mars: Deep Space Ship + Space
    'deep_space_ship+space': 'mars',

    // Phase 2: The Red Camp
    // Martian Resources: Astronaut + Mars -> Soil + Dry Ice
    'astronaut+mars': ['martian_soil', 'dry_ice'],
    // Permafrost: Electric Drill + Martian Soil
    'electric_drill+martian_soil': 'permafrost',
    // Dome City: Graphene Oxide + Lunar Concrete + Glass
    'glass+graphene_oxide+lunar_concrete': 'dome_city',

    // Phase 3: Warming & Atmosphere
    // Orbital Mirror: Aluminum + Satellite + Solar Panel
    'aluminum+satellite+solar_panel': 'orbital_mirror',
    // Greenhouse Gas: Fluorine + Sulfur + Coke (Carbon)
    'coke+fluorine+sulfur': 'greenhouse_gas',
    // CO2 Release: Dry Ice + Orbital Mirror -> CO2 (Thickening atmosphere)
    'dry_ice+orbital_mirror': 'carbon_dioxide',
    // Liquid Water: Permafrost + Orbital Mirror
    'orbital_mirror+permafrost': 'liquid_water',

    // Phase 4: Greening & Blue Mars
    // Cyano Bacteria: Culture Medium + DNA Sequencer + Sun
    'culture_medium+dna_sequencer+sun': 'cyano_bacteria',
    // Lichen: Cyano Bacteria + Liquid Water + Martian Soil
    'cyano_bacteria+liquid_water+martian_soil': 'lichen',
    // Forest: Lichen + Liquid Water + Plant
    'lichen+liquid_water+plant': 'forest',
    // Blue Mars: Forest + Liquid Water + Mars + Oxygen
    'forest+liquid_water+mars+oxygen': 'blue_mars',

    // === Military Tech Recipes ===

    // Level 1: Early Firearms
    // Flint: Stone + Iron (Striking)
    'iron+stone': 'flint',
    // Stock: Wood + Iron Tool -> Lumber
    'iron_tool+lumber': 'stock',
    // Musket: Matchlock Gun + Flint + Stock
    'flint+matchlock_gun+stock': 'musket',
    // Sword: Iron + Fire + Hammer (Iron Plate recipe analog) -> Iron + Fire + Stone Tool?
    'fire+iron+stone_tool': 'sword',
    // Bayonet: Musket + Sword
    'musket+sword': 'bayonet',
    // Horse: Animal + Grass/Carrot? -> Animal + Wheat
    'animal+wheat': 'horse',
    // Cavalry: Horse + Sword
    'horse+sword': 'cavalry',

    // Level 2: Modern Warfare
    // Armor Plate: Steel + Tungsten (Hardening)
    'steel+tungsten': 'armor_plate',
    // Machine Gun: Rifle + Motor + Chain/Belt (Iron Chain) -> Rifle + Motor + Iron
    'iron+motor+rifle': 'machine_gun',
    // Tank: Car (Chassis) + Cannon + Armor Plate + Caterpillar (Wheel+Iron??)
    'armor_plate+cannon+car': 'tank',
    // Submarine: Moved to Submarine Roadmap section
    // Battleship: Steamship + Cannon + Armor Plate + Radar
    'armor_plate+cannon+radar+steamship': 'battleship',

    // Level 3: Aerial & Missiles
    // Fighter Jet: Jet Plane + Machine Gun + Missile
    'jet_plane+machine_gun': 'fighter_jet', // Simple first
    // Bomber: Jet Plane + TNT + Computer
    'computer+jet_plane+tnt': 'bomber',
    // Missile: Rocket + Radar + TNT
    'radar+rocket+tnt': 'missile',
    // Armed Fighter: Fighter Jet + Missile
    // 'fighter_jet+missile': 'fighter_jet', // Removed: Circular
    // ICBM: Rocket + Nuclear Fuel + Computer
    'computer+nuclear_fuel+rocket': 'icbm',

    // Level 4: Future Weapons
    // Stealth Fighter: Fighter Jet + Carbon Fiber (RAM) + Radar (Stealth tech)
    'carbon_fiber+fighter_jet+radar': 'stealth_fighter',
    // Drone Swarm: Drone + AI + Internet
    'ai+drone+internet': 'drone_swarm',
    // Laser Cannon: Laser + Nuclear Power Plant (High Energy) + Mirror
    'laser+mirror+nuclear_power_plant': 'laser_cannon',
    // Railgun: Electromagnet + Super Conductor + Tungsten (Projectile) + Electricity
    'electricity+electromagnet+super_conductor+tungsten': 'railgun',

    // === Construction Tech Recipes ===
    // Fundamentals
    // Nail: Iron + Hammer idea -> Iron + Stone Tool (or Iron Tool)
    'iron+iron_tool': 'nail',
    // Screw: Iron + Lathe (or generic Iron Tool) -> Iron + Iron Pipe + Lathe?
    // Let's use Iron Wire (Wire) + Press Machine for Screw
    'press_machine+wire': 'screw_part',
    // Lumber: Wood + Saw (Iron Tool)
    'iron_tool+wood': 'lumber',

    // Catapult Roadmap
    'iron+wheel': 'gear', // Gear simplified
    'gear+string+wood': 'catapult', // Wood(Frame) + Gear(Winch) + String(Spring/Rope)

    // Pulley Roadmap
    'rod+string+wheel': 'pulley', // Wheel + Axle(Rod) + Rope(String)

    // Black Light Roadmap

    'nickel+oxygen': 'nickel_oxide',
    'glass+nickel_oxide': 'woods_glass', // Filter
    'glass+mercury+electricity': 'mercury_lamp', // UV Source
    'mercury_lamp+woods_glass': 'black_light', // Final Assembly

    // Japanese Sword Roadmap
    'charcoal+fire+iron_sand': 'tamahagane', // Tatara Smelting
    'clay+fire+fresh_water+tamahagane+wood': 'japanese_sword', // Forging (Clay for Hamon, Water for Quench)

    // Blade Technology Tree
    'aluminum+chromite+fire': 'chromium', // Thermite reduction
    'chromium+iron': 'stainless_steel',
    'iron+stone_tool+wood': 'knife', // Iron blade (sharpened) + Handle
    'iron_plate+stone_tool': 'saw', // Serrating an iron plate
    'knife+knife+screw_part': 'scissors', // Two blades + pivot
    'stainless_steel+stone_tool': 'scalpel', // Precision sharpening

    // Artificial Diamond Roadmap
    'iron+rod': 'piston', // Basic Piston
    'iron_plate+piston+vegetable_oil': 'hydraulic_press', // Using vegetable oil as hydraulic fluid
    'fire+graphite+hydraulic_press+nickel': 'artificial_diamond', // HPHT Process (Heat + Pressure + Catalyst)

    // === Food Expansion ===
    // Ingredients
    'plant+water+earth': 'rice', // Rice farming
    'plant+stone_tool': ['vegetable', 'tomato'], // Harvesting vegetables
    'animal+plant': 'milk', // Feeding animal -> Milk
    'flour+water+salt': 'noodle', // Noodles

    // Seasonings
    'soybean+salt+moldy_bread': 'miso',
    'fish+hot_water': 'dashi',
    'seaweed+hot_water': 'dashi',
    'egg+vinegar+vegetable_oil': 'mayonnaise',
    'tomato+sugar+vinegar': 'ketchup',

    // Japanese
    'rice+fish+vinegar': 'sushi',
    'fish+flour+vegetable_oil': 'tempura',
    'vegetable+flour+vegetable_oil': 'tempura',
    'dashi+miso+soybean': 'miso_soup',
    'rice+salt+seaweed': 'rice_ball',

    // Western
    'meat+fire+spice': 'steak',
    'meat+flour+vegetable+fire': 'hamburger',
    'egg+milk+fire': 'omelet',

    // Chinese
    'noodle+dashi+soy_sauce': 'ramen',
    'rice+egg+meat+fire': 'fried_rice',
    'flour+meat+vegetable+fire': 'dumpling',

    // Curry
    'rice+meat+vegetable+spice': 'curry_rice',

    // Tools
    'copper+iron+wood': 'soldering_iron',

    // Electronics Tech Tree
    'charcoal+clay+wire': 'resistor', // Carbon composition resistor
    'aluminum+paper+wire': 'capacitor', // Electrolytic capacitor logic
    'glass+silicon+wire': 'diode',
    'plastic+silicon+wire': 'led',
    'copper+plastic': 'circuit_board',
    'circuit_board+magnet+plastic+wire': 'radio', // Simple Radio

    // Submarine Roadmap
    'rutile+electricity': 'titanium', // Simplified reduction
    'iron_plate+screw_part': 'propeller',
    'glass+iron_pipe': 'periscope',
    'titanium+motor+propeller+periscope+oxygen': 'submarine', // Steel hull + Power + Propulsion + Observation + Life Support

    // Level 1: Shelter
    // Tent: Cloth + Rod + String
    'cloth+rod+string': 'tent',
    // Hut: Lumber + Plant (Straw)
    'lumber+plant': 'hut',
    // Log Cabin: Lumber + Lumber + Nail
    'lumber+lumber+nail': 'log_cabin',

    // Level 2: Classical & Infrastructure
    // Stone Pillar: Stone + Iron Tool (Chisel)
    'iron_tool+stone': 'stone_pillar',
    // Temple: Stone Pillar + Stone Plate + Gold (Decoration)
    'gold+stone_pillar+stone_plate': 'temple',
    // Castle: Stone + Lumber + Iron (Gate/Reinforcement)
    'iron+lumber+stone': 'castle',
    // Bridge: Stone + Concrete (or Brick) -> Stone + Cement
    'cement+stone': 'bridge',
    // Road: Asphalt + Stone (Gravel)
    'asphalt+stone': 'road',

    // Level 3: Modern City
    // Apartment: Reinforced Concrete + Glass + Electricity
    'electricity+glass+reinforced_concrete': 'apartment',
    // Stadium: Concrete + Floodlight(LED Bulb) + Lawn(Plant)
    'concrete+led_bulb+plant': 'stadium',
    // Airport: Road(Runway) + Radar + Control Tower(Concrete+Glass)
    'concrete+glass+radar+road': 'airport',
    // Highway: Road + Concrete + Sound Barrier(Aluminum?) -> Road + Concrete
    'concrete+road': 'highway',

    // Level 4: Future
    // Floating City: Concrete + Plastic (Float) + Ocean
    'concrete+ocean+plastic': 'floating_city',
    // Space Elevator: Space Elevator Cable + Space Station + Earth (Ground Base)
    'earth+space_elevator_cable+space_station': 'space_elevator',
    // Underground City: Electric Drill + Concrete + Light Bulb (Sunlight substitute)
    'concrete+electric_drill+led_bulb': 'underground_city',

    // === Radiation Tech Recipes ===
    // Level 1: Discovery
    // Uraninite: Uranium Ore + Stone Tool (Selection)
    'stone_tool+uranium_ore': 'uraninite',
    // Radium: Uraninite + Sulfuric Acid + Barium Chloride (Curie's Method) -> Simplified: Uraninite + Acid + Salt?
    // Let's use: Uraninite + Sulfuric Acid + Barium Chloride
    'barium_chloride+sulfuric_acid+uraninite': 'radium',
    // Geiger Counter: Sensor + Vacuum Tube(Geiger-Muller tube) + Battery
    'battery+sensor+vacuum_tube': 'geiger_counter',

    // Sensor: IC + Diode (Basic sensing circuit)
    'diode+ic': 'sensor',
    // Defibrillator: Battery + Capacitor + Sensor
    'battery+capacitor+sensor': 'defibrillator',

    // Level 2: Application
    // Radiotherapy: Cobalt + Lead (Shield) + Computer
    'cobalt+computer+lead': 'radiotherapy',
    // Sterilization Device: Cobalt + Belt (Conveyor/Part) -> Cobalt + Wheel + Iron?
    // Simplified: Cobalt + Iron Box (Chamber)
    'cobalt+iron_vessel': 'sterilization_device',
    // Tritium: Lithium Ore + Nuclear Power Plant (Neutron irradiation)
    'lithium_ore+nuclear_power_plant': 'tritium',

    // Level 3: Nuclear Energy
    // Control Rod: Steel + Cadmium (or Boron). Don't have those. Use Lead + Steel?
    // Let's use Silver (Neutron absorber used in early reactors) + Steel
    'silver+steel': 'control_rod',
    // Steam Turbine: Steam Engine + Fan (Propeller) + Generator
    'generator+propeller+steam_engine': 'steam_turbine',
    // Advanced Nuclear Plant (if we want to upgrade): Control Rod + Steam Turbine + Concrete + Nuclear Fuel
    // Let's keep existing recipe but maybe allow Control Rod use? Or create Plutonium from waste.
    // Plutonium: Nuclear Fuel + Nuclear Power Plant (Reprocessing concept)
    'nuclear_fuel+nuclear_power_plant': 'plutonium',

    // Level 4: Future
    // RTG: Plutonium + Peltier Element + Lead (Shield)
    'lead+peltier_element+plutonium': 'rtg',
    // Particle Accelerator: Super Conductor + Electromagnet + Vacuum Apparatus + Electricity
    'electricity+electromagnet+super_conductor+vacuum_apparatus': 'particle_accelerator',
    // Antimatter: Particle Accelerator + Vacuum + Energy (Electricity)
    'electricity+particle_accelerator+vacuum_apparatus': 'antimatter',

    // === Dark Side Tech Recipes ===
    // Level 1: Pollution
    // Sludge: Water + Trash/Ash? Let's use Water + Garbage concept (Plant Ash + Oil?)
    // Simplified: Water + Heavy Oil + Sulfur
    'fresh_water+heavy_oil+sulfur': 'sludge',
    // Smog: Carbon Dioxide + Sulfur Dioxide + Smoke (Carbon particles)
    // Simplified: Carbon Dioxide + Sulfur Dioxide
    'carbon_dioxide+sulfur_dioxide': 'smog',
    // Acid Rain: Smog + Rain (Fresh Water)
    'fresh_water+smog': 'acid_rain',

    // Level 2: Biohazard
    // Mutant: Animal + Radiation (Uraninite/Radium)
    'animal+uraninite': 'mutant',
    // Virus: DNA Sequencer + Arsenic (Poison)
    'arsenic+dna_sequencer': 'virus',
    // Bioweapon: Missile + Virus
    'missile+virus': 'bioweapon',

    // Level 3: Surveillance
    // Spy Satellite: Satellite + Camera + Radar
    'camera+radar+satellite': 'spy_satellite',
    // Surveillance Camera: Camera + Internet
    'camera+internet': 'surveillance_camera',
    // Propaganda: TV + Radio + Paper
    'paper+radio+television': 'propaganda',

    // Level 4: Apocalypse
    // Nuclear Winter: ICBM + Metropolis (City concept -> Skyscraper?)
    // Let's use ICBM + Skyscraper (Symbol of civilization)
    'icbm+skyscraper': 'nuclear_winter',
    // Doomsday Clock: Pendulum Clock + Uranium Ore (Nuclear threat symbol)
    'pendulum_clock+uranium_ore': 'doomsday_clock',

    // === AI Tech Recipes ===
    // Level 1: Core
    // Big Data: Internet + Computer + Server
    'computer+internet+server': 'big_data',
    // Machine Learning: Big Data + Computer
    'big_data+computer': 'machine_learning',
    // Neural Network: Machine Learning + Electricity (Activation)
    'electricity+machine_learning': 'neural_network',

    // Level 2: Positive (Utopia)
    // Medical AI: AI Chip + Stethoscope (or MRI/CT)
    'ai_chip+stethoscope': 'medical_ai',
    // Auto Translator: AI Chip + Smartphone (or Book/Paper concept)
    'ai_chip+smartphone': 'auto_translator',
    // AI Assistant: AI Chip + Smart Speaker
    'ai_chip+smart_speaker': 'ai_assistant',

    // Level 3: Negative (Dystopia)
    // Deepfake: AI + Movie Film (Video) + Propaganda (Lie)
    'ai+movie_film+propaganda': 'deepfake',
    // Cyber Attack: Internet + Virus (Bio Virus metaphor for Computer Virus) + AI
    'ai+internet+virus': 'cyber_attack',
    // AI Weapon: Drone + Machine Gun + AI
    'ai+drone+machine_gun': 'ai_weapon',

    // Level 4: Singularity
    // AGI: Neural Network + Quantum Computer
    'neural_network+quantum_computer': 'agi',
    // Super Intelligence: AGI + Internet + Electricity
    'agi+electricity+internet': 'super_intelligence',

    // === Industrial Chemistry Tech Recipes ===
    // Level 1: Basic Industrial
    // Lead Chamber Process (Sulfuric Acid): Sulfur + Nitric Acid + Water + Lead (Chamber)
    // Simplified: Sulfur + Nitric Acid + Water (Classic method before Contact Process)
    'fresh_water+nitric_acid+sulfur': 'sulfuric_acid',
    // Leblanc Process (Soda Ash): Salt + Sulfuric Acid + Coal + Limestone (Calcium Carbonate)
    // Simplified: Salt + Sulfuric Acid + Coal + Calcium Carbonate
    'calcium_carbonate+coal+salt+sulfuric_acid': 'sodium_carbonate',

    // Level 2: Ammonia & Fertilizer (Reinforcement)
    // Haber-Bosch is already defined via 'high_pressure_reactor'.
    // Ostwald is already defined via 'platinum'.

    // Level 3: Petrochemical
    // Zeolite: Stone + Aluminum + Silicon? Simplfied: Natural resource found in 'rock' or synthesized.
    // Let's make it synthesizeable or found. Found is better. Adding to generic drop later? Or synthesize: Clay + Sodium Hydroxide
    'clay+sodium_hydroxide': 'zeolite',
    // Catalytic Cracking (Gasoline): Heavy Oil + Zeolite (Catalyst)
    'heavy_oil+zeolite': 'gasoline',
    // Catalytic Reforming (Benzene): Naphtha + Platinum
    'naphtha+platinum': ['benzene', 'hydrogen'],

    // Level 4: Modern Process
    // Rhodium: Platinum ore byproduct or synthesized? Let's say found in 'ore' rare drop, or Platinum + Aqua Regia -> Residue?
    // Simplified: Platinum + Aqua Regia (Separation)
    // Rhodium: Found in ore (South Africa) or byproduct
    // 'aqua_regia+platinum': 'rhodium', // REMOVED: Unscientific. Rhodium is present in ore, not created from Pt.
    // Monsanto Process (Acetic Acid): Methanol + Carbon Monoxide + Rhodium
    'carbon_monoxide+methanol+rhodium': 'glacial_acetic_acid', // High purity acetic acid
    // Wacker Process (Acetaldehyde): Ethylene + Oxygen + Palladium
    'ethylene+oxygen+palladium': 'acetaldehyde',
    // Acetaldehyde: needed for... nothing yet? Maybe Acetic Acid shortcut?
    // Acetaldehyde + Oxygen -> Acetic Acid
    'acetaldehyde+oxygen': 'vinegar',

    'barcode+quadrilateral': 'qr_code',

    // Money Tech Tree Recipes
    // Cowrie: Gathered from Sea (Natural)

    // Coin: Copper + Press Machine (Minting)
    'copper+press_machine': 'coin',
    // Paper Money: Paper + Ink + Printing Press
    'ink+paper+printing_press': 'paper_money',
    // Credit Card: Plastic + IC
    'ic+plastic': 'credit_card',
    // Cashless Payment: Smartphone + QR Code
    'qr_code+smartphone': 'cashless_payment',
    // NFT: Blockchain + Photo
    'blockchain+photo': 'nft',

    // === Fixes for Missing Acquisitions ===
    // Crafted Items
    'copper+rod': 'copper_pipe',
    // 'naphtha+fire': 'plastic', // REMOVED: Too simple. Use polymerization.
    'polyethylene+press_machine': 'plastic', // Process polyethylene into generic plastic
    'iron_plate+iron_plate': 'pressure_vessel',
    'gear+iron_plate+motor': 'lathe',
    'iron_pipe+lathe': 'gun_barrel',
    'gear+lathe+motor': 'rifling_machine',
    'computer+ink+paper': 'barcode',

    // Biomass
    'plant+plant': 'biomass',

    // Ocean (Conceptual)
    // Ocean (Conceptual) - REMOVED (Unscientific)
    // 'fish+salt+water': 'ocean',

    // Mars Base construction
    'dome_city+living_module+mars': 'mars_base',

    // Mars item (Conceptual) - REMOVED (Unscientific: soil cannot become a planet)
    // 'martian_soil+martian_soil': 'mars',


    // Rare Metals Refining (Alternative to rare gathering) - REMOVED per feedback (unscientific)
    // 'gold_dust+aqua_regia': 'palladium',
    // 'platinum+aqua_regia': 'iridium',
    // 'galena+iron': 'antimony', // Antimony is now gathered directly


    // === Future / High Tech Recipes ===
    // 'computer+game_controller': 'game_console', // Duplicate removed
    'battery+motor+sensor': 'robot_vacuum',
    'ai_chip+electricity+speaker': 'smart_speaker',
    'lcd+plastic+sensor': 'vr_headset',
    'game_console+internet+stadium': 'esports',
    'computer+liquid_nitrogen+super_conductor': 'quantum_computer',
    'ic+microscope+motor': 'nanomachine',
    'concrete+super_conductor+tritium': 'fusion_reactor',
    'living_module+rocket+solar_panel': 'space_station',
    'antenna+computer+satellite': 'satellite_data',

    // 'aluminum+computer+rocket_engine': 'moon_lander', // Duplicate removed
    // 'oxygen+spacesuit': 'astronaut', // Duplicate removed

    // Moon Resource (Gatherable but also craftable for gameplay?)
    // Moon Resource
    // 'moon+stone_tool': 'regolith', // Removed: Moon is a location, not a mineable block here. Regolith is gathered. 
    // Actually, regolith is gathered on moon surface. But if "moon" item exists...

    'concrete+regolith': 'lunar_concrete',
    'regolith+wind': 'helium3', // Processing

    'airtight_fabric+aluminum+glass': 'living_module',
    // 'iron_plate+pump+road': 'airlock', // Removed nonsensical recipe

    // 'battery+electric_drill': 'electric_drill', // Removed: Self-craft
    // Drill: Motor + Battery + Diamond(or Tungsten)
    'battery+motor+tungsten': 'electric_drill',

    'fusion_reactor+rocket_engine': 'fusion_drive',
    'ai_chip+fusion_drive+living_module': 'deep_space_ship',


    // Fossil
    // Found in land/cave.

    // Mars Terraforming
    'aluminum+mirror+rocket': 'orbital_mirror',
    'orbital_mirror+permafrost': 'liquid_water',
    'fresh_water+sun': 'cyano_bacteria',
    'cyano_bacteria+stone': 'lichen',
    'earth+lichen+water': 'forest', // Creating forest from lichen/earth
    'forest+liquid_water+mars': 'blue_mars',

    // === Storage & Memory Roadmap ===
    // Magnetic Disk: Aluminum + Magnet
    'aluminum+magnet': 'magnetic_disk',
    // HDD: Magnetic Disk + Motor + IC + Aluminum (Case)
    'aluminum+ic+magnetic_disk+motor': 'hdd',

    // DRAM Chip: Wafer + Transistor + Capacitor
    'capacitor+transistor+wafer': 'dram_chip',
    // RAM: DRAM Chip + DRAM Chip + Gold (Terminals)
    'dram_chip+dram_chip+gold': 'ram',

    // Flash Memory: Wafer + IC (Control)
    'ic+wafer': 'flash_memory',
    // SSD: Flash Memory + Flash Memory + IC (Controller)
    'flash_memory+flash_memory+ic': 'ssd',

    // Copper Smelting
    'air+copper_ore+fire': 'copper_oxide_1',
    'copper_ore+copper_oxide_1': 'copper',
};

// Normalize RECIPES keys (Ensure all keys are sorted to avoid matching issues)
const NORMALIZED_RECIPES = {};
Object.keys(RECIPES).forEach(key => {
    const sortedKey = key.split('+').sort().join('+');
    NORMALIZED_RECIPES[sortedKey] = RECIPES[key];
});
// Replace original RECIPES with normalized one for lookup
// (We use a new constant to avoid mutating the original until we're sure, 
// but executeCraft uses 'RECIPES', so let's just use NORMALIZED_RECIPES in the logic)

const BASE_REUSABLE_ITEMS = [
    'stone_tool', 'bow', 'earthenware', 'iron_tool', 'alcohol_lamp', 'pencil', 'needle',
    'compass_tool', 'wheel', 'water_wheel', 'telescope', 'microscope', 'glasses',
    'piston', 'vacuum_pump', 'vacuum_apparatus', 'boiler', 'steam_engine', 'tire',
    'rubber_tube', 'magnet', 'generator', 'coil', 'electromagnet', 'platinum',
    'cylinder', 'light_bulb', 'ash_cupel', 'gas_burner', 'vanadium_pentoxide',
    'refrigerator', 'glass_vessel', 'matchlock_gun', 'cannon', 'rifle', 'pvc_pipe',
    'pendulum_clock', 'chronometer', 'quartz_clock', 'atomic_clock', 'fuel_cell',
    'lathe', 'boring_machine', 'milling_machine', 'rifling_machine', 'printing_press', 'typewriter',
    'movable_type', 'scales', 'balance', 'anvil', 'hammer'
];


let inventoryCounts = {};
let discovered = new Set(); // Start with nothing discovered
let unlockedFeats = new Set(); // Track shown notifications
// Utility: Debounce
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

let userInventoryOrder = []; // Stores IDs in user-defined order
let playerMoney = 0; // New Shop
let currentArea = 'japan';
let currentBookSearchQuery = '';
let currentShopSearchQuery = ''; // New Shop Search
let currentCivilizationLevel = 0; // Civilization Level
let isLoading = false; // Flag to suppress logs during load
let isLiteMode = false;

// Optimized Save
const debouncedSaveGame = debounce(() => {
    saveGame();
}, 2000); // Auto-save every 2s of inactivity or batch updates

// Slots
let slot1 = null;
let slot2 = null;
let slot3 = null;
let slot4 = null;
let slot5 = null;
let currentBookTab = 'elements'; // 'elements' or 'industry'
let currentShopTab = 'buy'; // 'buy' or 'sell'
let currentSortMode = 'id'; // 'id' or 'emoji'
let currentShopSortMode = 'id'; // 'id' or 'price'
let isManualSortMode = false;
let selectedSortItemId = null;

// DOM
const ui = {
    fieldView: document.getElementById('view-field'),
    labView: document.getElementById('view-lab'),
    bookView: document.getElementById('view-book'), // New
    navField: document.getElementById('nav-field'),
    navLab: document.getElementById('nav-lab'),
    navBook: document.getElementById('nav-book'), // New
    navShop: document.getElementById('nav-shop'), // New Shop
    shopView: document.getElementById('view-shop'), // New Shop
    playerMoney: document.getElementById('player-money'), // New Shop
    inventory: document.getElementById('element-list'),
    slot1: document.getElementById('slot-1'),
    slot2: document.getElementById('slot-2'),
    slot3: document.getElementById('slot-3'),
    slot4: document.getElementById('slot-4'),
    slot5: document.getElementById('slot-5'),
    result: document.getElementById('slot-result'),
    msgLog: document.getElementById('message-log'),
    deleteSaveBtn: document.getElementById('delete-save-btn'),
    exportSaveBtn: document.getElementById('export-save-btn'),
    importSaveBtn: document.getElementById('import-save-btn'),
    refineBtn: document.getElementById('refine-btn'),
    distillBtn: document.getElementById('distill-btn'),
    carbonizeBtn: document.getElementById('carbonize-btn'),
    sortIdBtn: document.getElementById('sort-id-btn'),
    sortEmojiBtn: document.getElementById('sort-emoji-btn'),
    // Shop Controls
    shopSearchInput: document.getElementById('shop-search-input'),
    shopSortIdBtn: document.getElementById('shop-sort-id-btn'),
    shopSortPriceAscBtn: document.getElementById('shop-sort-price-asc-btn'),
    shopSortPriceDescBtn: document.getElementById('shop-sort-price-desc-btn'),
    // Modal
    modal: document.getElementById('detail-modal'),
    modalBody: document.getElementById('modal-body'),
    closeModal: document.getElementById('close-modal'),
    manualSortBtn: document.getElementById('manual-sort-btn'), // New
    inventorySearch: document.getElementById('inventory-search'), // New
    toggleLiteBtn: document.getElementById('btn-toggle-lite'), // Lite Mode
    toggleLangBtn: document.getElementById('btn-lang-toggle'), // Lang Mode
    btnViewAuto: document.getElementById('btn-view-auto'), // View Mode
    btnViewPC: document.getElementById('btn-view-pc'),    // View Mode
    btnViewMob: document.getElementById('btn-view-mobile'), // View Mode
};

function init() {
    setupNavigation();
    setupMapUI(); // Map UI
    setupGathering();
    setupCraftingUI();
    updateGatherSpotDisplay(); // Initialize Area Display

    // Inject CSS for sort mode
    const style = document.createElement('style');
    style.textContent = `
        .sorting-mode .element-card { cursor: cell !important; }
        .element-card.selected-sort {
            border: 3px solid #ff9800 !important;
            background-color: #fff3e0 !important;
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
            z-index: 20;
        }
    `;
    document.head.appendChild(style);

    // Setup Reset
    if (ui.deleteSaveBtn) {
        ui.deleteSaveBtn.addEventListener('click', resetGameData);
        if (ui.exportSaveBtn) ui.exportSaveBtn.addEventListener('click', exportSaveData);
        if (ui.importSaveBtn) ui.importSaveBtn.addEventListener('click', importSaveData);
    }

    // Setup Refining
    if (ui.refineBtn) {
        ui.refineBtn.addEventListener('click', refineOre);
    }
    // Oil Refinery Button
    const oilBtn = document.getElementById('oil-refine-btn');
    if (oilBtn) {
        oilBtn.addEventListener('click', refineCrudeOil);
    }

    // Setup Distilling
    if (ui.distillBtn) {
        ui.distillBtn.addEventListener('click', distillWater);
    }
    // Setup Carbonizing
    if (ui.carbonizeBtn) {
        ui.carbonizeBtn.addEventListener('click', carbonizeWood);
    }

    // Setup Extraction
    const extractBtn = document.getElementById('extract-btn');
    if (extractBtn) {
        extractBtn.addEventListener('click', performExtraction);
    }

    // Setup Manual Sort
    if (ui.manualSortBtn) {
        ui.manualSortBtn.addEventListener('click', toggleManualSortMode);
    }

    // Setup Inventory Search
    if (ui.inventorySearch) {
        ui.inventorySearch.addEventListener('input', () => {
            renderInventory();
        });
    }

    // Setup Lite Mode
    if (ui.toggleLiteBtn) {
        ui.toggleLiteBtn.addEventListener('click', () => toggleLiteMode());
    }
    // Load Lite Mode Setting
    if (localStorage.getItem('nature_science_lite_mode') === 'true') {
        toggleLiteMode(true);
    }

    updateLanguageUI();

    // Setup View Mode Switching
    if (ui.btnViewAuto && ui.btnViewPC && ui.btnViewMob) {
        const responsiveCss = document.getElementById('responsive-css');

        function setViewMode(mode) {
            // Reset Buttons
            [ui.btnViewAuto, ui.btnViewPC, ui.btnViewMob].forEach(btn => {
                btn.style.fontWeight = 'normal';
                btn.style.textDecoration = 'none';
                btn.style.color = '#888';
            });

            if (mode === 'auto') {
                responsiveCss.media = '(max-width: 768px)';
                ui.btnViewAuto.style.fontWeight = 'bold';
                ui.btnViewAuto.style.textDecoration = 'underline';
                ui.btnViewAuto.style.color = '#333';
            } else if (mode === 'pc') {
                responsiveCss.media = 'not all'; // Disable mobile css
                ui.btnViewPC.style.fontWeight = 'bold';
                ui.btnViewPC.style.textDecoration = 'underline';
                ui.btnViewPC.style.color = '#333';
            } else if (mode === 'mobile') {
                responsiveCss.media = 'all'; // Force mobile css
                ui.btnViewMob.style.fontWeight = 'bold';
                ui.btnViewMob.style.textDecoration = 'underline';
                ui.btnViewMob.style.color = '#333';
            }
        }

        ui.btnViewAuto.addEventListener('click', () => setViewMode('auto'));
        ui.btnViewPC.addEventListener('click', () => setViewMode('pc'));
        ui.btnViewMob.addEventListener('click', () => setViewMode('mobile'));

        // Initialize (Auto default)
        setViewMode('auto');
    }

    // Setup Book Search
    const bookSearchInput = document.getElementById('book-search-input');
    if (bookSearchInput) {
        bookSearchInput.addEventListener('input', (e) => {
            currentBookSearchQuery = e.target.value.toLowerCase();
            const grid = document.getElementById('encyclopedia-grid');
            if (currentBookTab === 'elements') {
                renderElementsEncyclopedia(grid);
            } else {
                renderIndustrialEncyclopedia(grid);
            }
        });
    }

    // Setup Modal Close
    if (ui.closeModal) {
        ui.closeModal.addEventListener('click', () => {
            ui.modal.style.display = 'none';
        });
        ui.modal.addEventListener('click', (e) => {
            if (e.target === ui.modal) ui.modal.style.display = 'none';
        });
    }

    // Load saved data
    isLoading = true; // Suppress logs during load
    if (!loadGame()) {
        isLoading = false;
        log("あなたはこの原始時代の唯一の科学者です。自然豊かなこの大地から全てが始まります！さあ、実験を始めましょう！");
    } else {
        isLoading = false;
        log("前回の続きから再開します。");
    }

    // Setup debug unlock on title
    const titleEl = document.querySelector('.sidebar h1');
    if (titleEl) {
        setupDebugUnlock(titleEl);
    }

    updateStats();
    renderInventory();
}

function setupDebugUnlock(targetElement) {
    let clickCount = 0;
    // targetElement.style.cursor = 'help'; // Removed visible hint
    targetElement.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 10) {
            const password = prompt("デバッグ：パスワードを入力");
            if (password === "H2SO4") {
                unlockAllElements();
                targetElement.style.color = '#4caf50';
                showFloatText(targetElement, "全開放！");
                log("🔧 デバッグ：全要素を解放しました。");
            } else if (password !== null) {
                alert("パスワードが違います。");
            }
            clickCount = 0;
        }
    });
}

function unlockAllElements() {
    Object.keys(ELEMENTS).forEach(id => {
        discovered.add(id);
        inventoryCounts[id] = 99;
    });
    // サイレントで実績解除フラグを立てる（メッセージを出さないため）
    unlockedFeats.add('all_elements_discovered');
    saveGame();
    updateStats();
    updateCivilizationLevel(); // Verify civilization level with all items
    renderInventory();
    if (ui.bookView.style.display !== 'none') {
        renderEncyclopedia();
    }
    // log("🔧 デバッグ機能：全要素の解放と、倉庫への追加（x99）を行いました。");
}

function showFloatText(element, text) {
    const floatText = document.createElement('div');
    floatText.innerText = text;
    floatText.style.position = 'absolute';
    floatText.style.color = 'white';
    floatText.style.fontWeight = 'bold';
    floatText.style.left = '50%';
    floatText.style.top = '50%';
    floatText.style.transform = 'translate(-50%, -50%)';
    floatText.style.pointerEvents = 'none';
    floatText.animate([
        { transform: 'translate(-50%, -50%)', opacity: 1 },
        { transform: 'translate(-50%, -150%)', opacity: 0 }
    ], { duration: 800, easing: 'ease-out' });

    element.appendChild(floatText);
    setTimeout(() => floatText.remove(), 800);
}

// === Save/Load System ===
function saveGame() {
    const data = {
        inventory: inventoryCounts,
        discovered: Array.from(discovered),
        unlockedFeats: Array.from(unlockedFeats),
        order: userInventoryOrder,
        civLevel: currentCivilizationLevel,
        money: playerMoney // New Shop
    };
    localStorage.setItem('nature_science_save', JSON.stringify(data));
}

function loadGame() {
    const json = localStorage.getItem('nature_science_save');
    if (json) {
        try {
            const data = JSON.parse(json);
            inventoryCounts = data.inventory || {};
            if (data.discovered) {
                discovered = new Set(data.discovered);
            }
            if (data.order && Array.isArray(data.order)) {
                userInventoryOrder = data.order;
            } else {
                userInventoryOrder = Object.keys(inventoryCounts).sort();
            }
            if (data.unlockedFeats) {
                unlockedFeats = new Set(data.unlockedFeats);
            }
            if (data.civLevel) {
                currentCivilizationLevel = data.civLevel;
            } else {
                // Calculation for old save data
                updateCivilizationLevel(true);
            }
            if (data.money) {
                playerMoney = data.money;
            }
            if (ui.playerMoney) ui.playerMoney.innerText = playerMoney;
        } catch (e) {
            console.error(e);
        }
    }
    return true;
}

function resetGameData() {
    if (confirm("本当にデータを削除してリスタートしますか？\n（この操作は取り消せません）")) {
        localStorage.removeItem('nature_science_save');
        location.reload();
    }
}

function exportSaveData() {
    const data = localStorage.getItem('nature_science_save');
    if (!data) {
        alert("保存データが見つかりません。");
        return;
    }
    // Simple Base64 encode
    try {
        const encoded = btoa(encodeURIComponent(data));
        navigator.clipboard.writeText(encoded).then(() => {
            alert("セーブコードをクリップボードにコピーしました！\nメモ帳などに貼り付けて保存してください。");
        }).catch(() => {
            prompt("以下のコードをコピーしてください：", encoded);
        });
    } catch (e) {
        alert("エクスポートに失敗しました。");
        console.error(e);
    }
}

function importSaveData() {
    const input = prompt("セーブコードを入力（貼り付け）してください：\n※現在の進行状況は上書きされます！");
    if (!input) return;

    try {
        const decoded = decodeURIComponent(atob(input));
        // Verify JSON
        JSON.parse(decoded);

        if (confirm("本当にこのデータをロードしますか？\n現在の進行状況は失われます。")) {
            localStorage.setItem('nature_science_save', decoded);
            alert("ロード成功！リロードします。");
            location.reload();
        }
    } catch (e) {
        alert("無効なデータコードです。");
        console.error(e);
    }
}

// === Navigation ===
function setupNavigation() {
    ui.navField.addEventListener('click', () => switchView('field'));
    ui.navLab.addEventListener('click', () => switchView('lab'));
    ui.navBook.addEventListener('click', () => {
        switchView('book');
        renderEncyclopedia();
    });
    // New Shop Nav
    if (ui.navShop) {
        ui.navShop.addEventListener('click', () => {
            switchView('shop');
            renderShop();
        });
    }

    // Shop Tabs
    const tabBuy = document.getElementById('tab-buy');
    const tabSell = document.getElementById('tab-sell');
    if (tabBuy) tabBuy.addEventListener('click', () => { currentShopTab = 'buy'; renderShop(); });
    if (tabSell) tabSell.addEventListener('click', () => { currentShopTab = 'sell'; renderShop(); });

    if (ui.sortIdBtn) {
        ui.sortIdBtn.addEventListener('click', () => {
            currentSortMode = 'id';
            renderEncyclopedia();
        });
    }
    if (ui.sortEmojiBtn) {
        ui.sortEmojiBtn.addEventListener('click', () => {
            currentSortMode = 'emoji';
            renderEncyclopedia();
        });
    }

    // Shop Sort
    if (ui.shopSortIdBtn) {
        ui.shopSortIdBtn.addEventListener('click', () => {
            currentShopSortMode = 'id';
            renderShop();
        });
    }
    if (ui.shopSortPriceAscBtn) {
        ui.shopSortPriceAscBtn.addEventListener('click', () => {
            currentShopSortMode = 'price_asc';
            renderShop();
        });
    }
    if (ui.shopSortPriceDescBtn) {
        ui.shopSortPriceDescBtn.addEventListener('click', () => {
            currentShopSortMode = 'price_desc';
            renderShop();
        });
    }

    // Shop Search
    if (ui.shopSearchInput) {
        ui.shopSearchInput.addEventListener('input', (e) => {
            currentShopSearchQuery = e.target.value.toLowerCase();
            renderShop();
        });
    }

    // Book Tabs
    const tabElements = document.getElementById('tab-elements');
    const tabIndustry = document.getElementById('tab-industry');

    if (tabElements) {
        tabElements.addEventListener('click', () => {
            currentBookTab = 'elements';
            renderEncyclopedia();
        });
    }
    if (tabIndustry) {
        tabIndustry.addEventListener('click', () => {
            currentBookTab = 'industry';
            renderEncyclopedia();
        });
    }
}



function switchView(mode) {
    // Hide all first
    ui.fieldView.style.display = 'none';
    ui.labView.style.display = 'none';
    ui.bookView.style.display = 'none';
    if (ui.shopView) ui.shopView.style.display = 'none';

    ui.navField.classList.remove('active');
    ui.navLab.classList.remove('active');
    ui.navBook.classList.remove('active');
    if (ui.navShop) ui.navShop.classList.remove('active');

    if (mode === 'field') {
        ui.fieldView.style.display = 'block';
        ui.navField.classList.add('active');
    } else if (mode === 'lab') {
        ui.labView.style.display = 'flex';
        ui.labView.style.flexDirection = 'column';
        ui.navLab.classList.add('active');
    } else if (mode === 'book') {
        ui.bookView.style.display = 'block';
        ui.navBook.classList.add('active');
    } else if (mode === 'shop') {
        if (ui.shopView) ui.shopView.style.display = 'block';
        if (ui.navShop) ui.navShop.classList.add('active');
    }
}

// === Gathering ===
// === Area System ===
function switchArea(area) {
    currentArea = area;
    let msg = "移動しました。";
    if (area === 'japan') msg = "日本（拠点）に戻りました。";
    else if (area === 'asia') msg = "東南アジアに到着しました。";
    else if (area === 'america') msg = "北米に到着しました。";
    else if (area === 'south_america') msg = "南米に到着しました。";
    else if (area === 'europe') msg = "スペインに到着しました。";
    else if (area === 'south_africa') msg = "南アフリカに到着しました。";
    else if (area === 'australia') msg = "オーストラリアに到着しました。";
    else if (area === 'moon') msg = "月面に着陸しました。";
    else if (area === 'mars') msg = "火星に降り立ちました。";
    else if (area === 'okinawa') msg = "沖縄に到着しました。めんそーれ！";
    else if (area === 'hokkaido') msg = "北海道に到着しました。でっかいどう！";
    else if (area === 'kagoshima') msg = "鹿児島に到着しました。おじゃったもんせ！";

    log(msg);
    updateGatherSpotDisplay();
}

function updateGatherSpotDisplay() {
    // Hide all first
    document.querySelectorAll('.gather-spot').forEach(el => el.style.display = 'none');

    // Always show Map Button if unlocked (and update text)
    if (discovered.has('steamship')) {
        const mapBtn = document.querySelector('.gather-spot[data-id="foreign"]');
        if (mapBtn) {
            mapBtn.style.display = 'flex';
            mapBtn.style.order = '-1'; // Ensure it is always first
            mapBtn.innerHTML = currentArea === 'japan' ? '🚢 出航' : '🗺️ 移動';
        }
    }

    // Determine Map Button text for Moon or Mars
    if (currentArea === 'moon' || currentArea === 'mars') {
        const mapBtn = document.querySelector('.gather-spot[data-id="foreign"]');
        if (mapBtn) {
            mapBtn.style.display = 'flex';
            mapBtn.style.order = '-1'; // Ensure it is always first
            mapBtn.innerHTML = '🚀 地球へ帰還';
        }
    }

    // Show area specific spots
    if (currentArea === 'japan') {
        const ids = ['water', 'forest', 'land', 'air', 'sun', 'ore', 'onsen', 'river', 'home'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
        // Oil check
        if (discovered.has('steam_engine')) {
            const oil = document.querySelector('.gather-spot[data-id="oil"]');
            if (oil) oil.style.display = 'flex';
        }
    } else if (currentArea === 'asia') {
        const ids = ['jungle', 'spice_field'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'america') {
        const ids = ['corn_field'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'south_america') {
        const ids = ['andes', 'amazon', 'salt_lake', 'araxa_mine'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'europe') {
        const ids = ['olive_grove', 'spanish_coast'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'south_africa') {
        const ids = ['savannah'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'australia') {
        const ids = ['red_desert'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'moon') {
        const ids = ['crater'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'mars') {
        const ids = ['mars_surface'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'okinawa') {
        const ids = ['water', 'sun', 'coral_reef', 'sugarcane_field'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'hokkaido') {
        const ids = ['land', 'snow_field', 'coal_mine', 'forest'];
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    } else if (currentArea === 'kagoshima') {
        const ids = ['water', 'sun', 'onsen', 'gold_mine']; // Hot springs and Gold mine
        ids.forEach(id => {
            const el = document.querySelector(`.gather-spot[data-id="${id}"]`);
            if (el) el.style.display = 'flex';
        });
    }
}

// === Map System ===
function setupMapUI() {
    const mapModal = document.getElementById('map-modal');
    const closeMap = document.getElementById('close-map');
    const destLocal = document.getElementById('dest-local');
    const destForeign = document.getElementById('dest-foreign');
    const destAmerica = document.getElementById('dest-america');
    const destSouthAmerica = document.getElementById('dest-south-america');
    const destEurope = document.getElementById('dest-europe');
    const destSouthAfrica = document.getElementById('dest-south-africa');
    const destAustralia = document.getElementById('dest-australia');
    const destMoon = document.getElementById('dest-moon');
    const destMars = document.getElementById('dest-mars');
    const destOkinawa = document.getElementById('dest-okinawa');
    const destHokkaido = document.getElementById('dest-hokkaido');
    const destKagoshima = document.getElementById('dest-kagoshima');
    const rocketMapSection = document.getElementById('rocket-map-section');

    // Unlock logic for Moon
    // Unlock logic for Space Map Section
    if (rocketMapSection) {
        // Show section if Space is discovered (via Rocket launch)
        if (discovered.has('space')) {
            rocketMapSection.style.display = 'block';
        } else {
            rocketMapSection.style.display = 'none';
        }
    }

    // Mars Visiblity logic
    if (destMars) {
        // Show Mars destination only if Moon Base is completed (discovered)
        if (discovered.has('moon_base')) {
            destMars.style.display = 'block'; // Or 'flex' depending on CSS, but block/inline-block for grid item
        } else {
            destMars.style.display = 'none';
        }
    }

    if (closeMap) closeMap.addEventListener('click', () => mapModal.style.display = 'none');

    // Updated Close Button
    const closeMapBtn = document.getElementById('close-map-btn');
    if (closeMapBtn) closeMapBtn.addEventListener('click', () => mapModal.style.display = 'none');

    if (mapModal) mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal) mapModal.style.display = 'none';
    });

    if (destLocal) {
        destLocal.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('japan');
        });
    }
    if (destOkinawa) {
        destOkinawa.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('okinawa');
        });
    }
    if (destHokkaido) {
        destHokkaido.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('hokkaido');
        });
    }
    if (destKagoshima) {
        destKagoshima.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('kagoshima');
        });
    }
    if (destForeign) {
        destForeign.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('asia');
        });
    }
    if (destAmerica) {
        destAmerica.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('america');
        });
    }
    if (destSouthAmerica) {
        destSouthAmerica.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('south_america');
        });
    }
    if (destEurope) {
        destEurope.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('europe');
        });
    }
    if (destSouthAfrica) {
        destSouthAfrica.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('south_africa');
        });
    }
    if (destAustralia) {
        destAustralia.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('australia');
        });
    }
    if (destMoon) {
        destMoon.addEventListener('click', () => {
            if (!discovered.has('moon')) {
                alert("まだ月を発見していません！望遠鏡で宇宙を観測してください。");
                return;
            }
            if (!discovered.has('spacesuit')) {
                alert("宇宙服がありません！宇宙空間では生存できません。");
                return;
            }
            mapModal.style.display = 'none';
            switchArea('moon');
        });
    }
    if (destMars) {
        destMars.addEventListener('click', () => {
            if (!discovered.has('mars')) {
                alert("まだ火星を発見していません！深宇宙探査船で宇宙を探索してください。");
                return;
            }
            if (!discovered.has('deep_space_ship')) {
                alert("深宇宙探査船がありません！火星への航行は不可能です。");
                return;
            }
            mapModal.style.display = 'none';
            switchArea('mars');
        });
    }
}

// === Gathering ===
function setupGathering() {
    document.querySelectorAll('.gather-spot').forEach(spot => {
        spot.addEventListener('click', (e) => {
            const spotType = spot.dataset.id;
            let itemId;

            // Map Logic for Foreign Spot
            if (spotType === 'foreign') {
                // Update Moon unlock status dynamically
                const rocketMapSection = document.getElementById('rocket-map-section');
                if (rocketMapSection) {
                    if (discovered.has('space')) {
                        rocketMapSection.style.display = 'block';
                    } else {
                        rocketMapSection.style.display = 'none';
                    }

                    // Update Mars Button Visibility dynamically
                    const btnMars = document.getElementById('dest-mars');
                    if (btnMars) {
                        if (discovered.has('moon_base')) {
                            btnMars.style.display = 'block';
                        } else {
                            btnMars.style.display = 'none';
                        }
                    }
                }

                document.getElementById('map-modal').style.display = 'flex';
                return;
            }

            // Animation

            // Logic
            if (spotType === 'water') {
                // Sea: Fish, Seaweed, Shell, Sand, Water
                const rand = Math.random();
                if (rand < 0.1) itemId = 'fish';
                else if (rand < 0.2) itemId = 'seaweed';
                else if (rand < 0.3) itemId = 'cowrie'; // Added Cowrie
                else if (rand < 0.6) itemId = 'shell';
                else if (rand < 0.7) itemId = 'sand';
                else itemId = 'water';
            } else if (spotType === 'forest') {
                const rand = Math.random();
                if (rand < 0.40) itemId = 'wood';
                else if (rand < 0.60) itemId = 'plant';
                else if (rand < 0.70) itemId = 'flower';
                else if (rand < 0.80) itemId = 'tea_leaf'; // Tea Leaf
                else if (rand < 0.90) itemId = 'egg'; // Bird's Egg
                else if (rand < 0.95) itemId = 'animal';
                else itemId = 'earth';
            } else if (spotType === 'land') {
                // Land: 60% Earth, 25% Clay, 15% Diatomaceous Earth
                const rand = Math.random();
                if (rand < 0.15) itemId = 'diatomaceous_earth';
                else if (rand < 0.4) itemId = 'clay';
                else itemId = 'earth';
            } else if (spotType === 'air') {
                // Sky: Lightning, Air
                const rand = Math.random();
                if (rand < 0.05) itemId = 'lightning';
                else itemId = 'air';
            } else if (spotType === 'river') {
                // River: 0.1% Platinum, 10% Gold Dust, (20% Iron Sand if has Magnet), else Sand/Stone/Water
                const rand = Math.random();
                const hasMagnet = (inventoryCounts['magnet'] > 0) || (inventoryCounts['electromagnet'] > 0);

                if (rand < 0.001) itemId = 'platinum';
                else if (rand < 0.05) itemId = 'rutile'; // Added Rutile
                else if (rand < 0.101) itemId = 'gold_dust';
                else if (hasMagnet && rand < 0.301) itemId = 'iron_sand';
                else if (rand < 0.5) itemId = 'stone';
                else if (rand < 0.7) itemId = 'sand';
                else itemId = 'fresh_water';
            } else if (spotType === 'ore') {
                // Ore spot (Cave): Diverse minerals including Scheelite, Barite
                // Minecart Bonus: Get 3 items at once
                let gatherCount = 1;
                if (inventoryCounts['minecart'] && inventoryCounts['minecart'] > 0) {
                    gatherCount = 3;
                }

                for (let i = 0; i < gatherCount; i++) {
                    let oreItem = 'iron_ore';
                    const rand = Math.random();
                    if (rand < 0.04) oreItem = 'bismuth_ore';
                    else if (rand < 0.08) oreItem = 'antimony';
                    else if (rand < 0.12) oreItem = 'gold_ore'; // Replaced copper_ore
                    else if (rand < 0.13) oreItem = 'palladium'; // Rare chance in cave
                    else if (rand < 0.14) oreItem = 'iridium';   // Rare chance in cave
                    else if (rand < 0.18) oreItem = 'cinnabar';
                    else if (rand < 0.20) oreItem = 'copper_sulfate';
                    else if (rand < 0.25) oreItem = 'cassiterite';
                    else if (rand < 0.30) oreItem = 'manganese_dioxide';
                    else if (rand < 0.37) oreItem = 'galena';
                    else if (rand < 0.44) oreItem = 'sphalerite';
                    else if (rand < 0.55) oreItem = 'coal';
                    else if (rand < 0.63) oreItem = 'graphite';
                    else if (rand < 0.70) oreItem = 'magnetite';
                    else if (rand < 0.77) oreItem = 'scheelite';
                    else if (rand < 0.85) oreItem = 'calcite';
                    else if (rand < 0.90) oreItem = 'barite';
                    else oreItem = 'fossil'; // Added Fossil

                    addItem(oreItem, 1);
                    // Slight delay for visual or just show all
                    setTimeout(() => {
                        const data = ELEMENTS[oreItem];
                        showFloatText(spot, data.emoji);
                    }, i * 200);
                }
                return; // Skip default addItem at bottom
            } else if (spotType === 'onsen') {
                // Onsen now only gives sulfur
                itemId = 'sulfur';
            } else if (spotType === 'home') {
                // Settlement: 100% Urine for now
                itemId = 'urine';
            } else if (spotType === 'oil') {
                // Oil Field
                itemId = 'crude_oil';
            } else if (spotType === 'foreign') {
                // Foreign Land (Map Button) - handled by interception? 
                // Actually if interception works, this code is unreachable. 
                // But just in case:
                return;
            } else if (spotType === 'jungle') {
                // Rubber Tree or Sugarcane
                itemId = (Math.random() < 0.6) ? 'rubber_tree' : 'sugarcane';
            } else if (spotType === 'spice_field') {
                itemId = 'spice';
            } else if (spotType === 'corn_field') {
                itemId = 'corn';
            } else if (spotType === 'andes') {
                // Andes: Potato, Copper Ore
                const rand = Math.random();
                if (rand < 0.7) itemId = 'potato';
                else itemId = 'copper_ore';
            } else if (spotType === 'amazon') {
                itemId = 'cacao';
            } else if (spotType === 'araxa_mine') {
                // Araxa Mine: Pyrochlore (Niobium)
                const rand = Math.random();
                if (rand < 0.7) itemId = 'pyrochlore';
                else if (rand < 0.9) itemId = 'monazite'; // Rare earth also found in Brazil
                else itemId = 'stone';
            } else if (spotType === 'salt_lake') {
                // Uyuni Salt Lake: Brine, Salt
                const rand = Math.random();
                if (rand < 0.6) itemId = 'brine';
                else itemId = 'salt';
            } else if (spotType === 'olive_grove') {
                itemId = 'olive';
            } else if (spotType === 'spanish_coast') {
                itemId = 'fluorite';
            } else if (spotType === 'savannah') {
                // South Africa (Mn, Cr, V, Pt, Diamond?) 
                // Adding Coffee here as "Origin of Coffee (Ethiopia)" logic
                const rand = Math.random();
                if (rand < 0.30) itemId = 'earth';
                else if (rand < 0.50) itemId = 'stone';
                else if (rand < 0.65) itemId = 'animal'; // Zebra/Lion? -> Meat/Leather
                else if (rand < 0.75) itemId = 'coffee_bean'; // New: Coffee Origin
                else if (rand < 0.77) itemId = 'diamond'; // Diamond (Rare)
                else if (rand < 0.82) itemId = 'chromite';
                else if (rand < 0.88) itemId = 'pentlandite'; // Ni
                else if (rand < 0.94) itemId = 'molybdenite'; // Mo
                else if (rand < 0.98) itemId = 'rutile'; // Ti
                else itemId = 'platinum'; // Pt
            } else if (spotType === 'red_desert') {
                // Australia (Al, Fe, U, Co, Rare Earth, Lithium)
                const rand = Math.random();
                if (rand < 0.30) itemId = 'bauxite';
                else if (rand < 0.50) itemId = 'iron_ore';
                else if (rand < 0.65) itemId = 'cobalt_ore'; // Cobalt
                else if (rand < 0.78) itemId = 'monazite'; // Neodymium ore
                else if (rand < 0.88) itemId = 'lithium_ore'; // Lithium ore (Spodumene)
                else if (rand < 0.95) itemId = 'uranium_ore';
                else itemId = 'sand';
            } else if (spotType === 'crater') {
                // Moon Crater: Regolith, Sand, Iron, Titanium, Platinum, Iridium
                const rand = Math.random();
                if (rand < 0.35) itemId = 'stone'; // Moon rock (Regolith)
                else if (rand < 0.55) itemId = 'sand'; // Moon sand
                else if (rand < 0.75) itemId = 'iron_ore';
                else if (rand < 0.90) itemId = 'titanium_sponge';
                else if (rand < 0.95) itemId = 'platinum';
                else itemId = 'iridium'; // New
            } else if (spotType === 'mars_surface') {
                // Mars Surface: Martian Soil, Dry Ice, Stone, Iron Ore
                const rand = Math.random();
                if (rand < 0.30) itemId = 'martian_soil';
                else if (rand < 0.50) itemId = 'stone';
                else if (rand < 0.70) itemId = 'dry_ice';
                else if (rand < 0.80) itemId = 'permafrost'; // Added Permafrost
                else if (rand < 0.95) itemId = 'iron_ore';
                else itemId = 'sand';
            } else if (spotType === 'sugarcane_field') {
                // Okinawa: Sugarcane
                const rand = Math.random();
                if (rand < 0.60) itemId = 'sugarcane';
                else if (rand < 0.80) itemId = 'plant';
                else itemId = 'earth';
            } else if (spotType === 'coral_reef') {
                // Okinawa: Coral Reef
                const rand = Math.random();
                if (rand < 0.40) itemId = 'shell';
                else if (rand < 0.60) itemId = 'calcium_carbonate'; // Coral
                else if (rand < 0.70) itemId = 'sand';
                else itemId = 'water';
            } else if (spotType === 'snow_field') {
                // Hokkaido: Snow field
                const rand = Math.random();
                if (rand < 0.70) itemId = 'ice'; // Snow/Ice
                else if (rand < 0.80) itemId = 'fresh_water';
                else if (rand < 0.90) itemId = 'animal'; // Fox/Bear?
                else itemId = 'wood';
            } else if (spotType === 'coal_mine') {
                // Hokkaido: Coal Mine
                const rand = Math.random();
                if (rand < 0.60) itemId = 'coal';
                else if (rand < 0.80) itemId = 'stone';
                else if (rand < 0.95) itemId = 'iron_ore';
                else itemId = 'clay';
            } else if (spotType === 'gold_mine') {
                // Kagoshima: Hishikari Mine (High grade gold)
                const rand = Math.random();
                if (rand < 0.40) itemId = 'gold_ore'; // Gold Ore (High grade)
                else if (rand < 0.55) itemId = 'gold_dust'; // Placer gold (less common in vein mines but possible nearby)
                else if (rand < 0.80) itemId = 'stone'; // Host rock (Ryolite/Andesite)
                else itemId = 'earth';
            }

            // Fallback (Sun, etc.)
            if (!itemId) itemId = spotType;

            addItem(itemId, 1);

            // Visual Feedback Only (No logs)
            const data = ELEMENTS[itemId];
            showFloatText(spot, data.emoji);

            // Special log for Shell/Wood/Ore only? Or remove all as requested?
            // User requested "remove logs like 'gathered XX'".
            // I will keep ONLY rare/special event logs if strictly necessary, but user said "don't need logs".
            // So I will remove standard gathering logs. 
            // Maybe keep Ore discovery log? I'll keep Ore.
            if (itemId === 'ore') {
                // log("洞窟で 未知の鉱石 を発見！"); // Even this might be annoying? 
                // Let's comment it out to be safe based on "don't need logs".
            }
        });
    });
}

function onInventoryClick(id) {
    console.log('onInventoryClick:', id, 'isManualSortMode:', isManualSortMode, 'selected:', selectedSortItemId);
    if (isManualSortMode) {
        if (selectedSortItemId === null) {
            selectedSortItemId = id;
            console.log('Selected first item:', id);
        } else if (selectedSortItemId === id) {
            selectedSortItemId = null;
            console.log('Deselected item');
        } else {
            console.log('Swapping:', selectedSortItemId, '<->', id);
            const idx1 = userInventoryOrder.indexOf(selectedSortItemId);
            const idx2 = userInventoryOrder.indexOf(id);
            console.log('Indexes:', idx1, idx2);

            if (idx1 !== -1 && idx2 !== -1) {
                const temp = userInventoryOrder[idx1];
                userInventoryOrder[idx1] = userInventoryOrder[idx2];
                userInventoryOrder[idx2] = temp;

                saveGame();
                selectedSortItemId = null;
                saveGame();
                selectedSortItemId = null;
                log("🔄 アイテムを入れ替えました。");
            } else {
                console.warn('Could not find items in order array');
            }
        }
        renderInventory();
        return;
    }

    if (ui.bookView.style.display === 'block') {
        showElementDetail(id);
        return;
    }
    putToSlot(id);
}

function toggleManualSortMode() {
    isManualSortMode = !isManualSortMode;
    selectedSortItemId = null;
    console.log('Manual Sort Mode Toggled:', isManualSortMode);

    if (isManualSortMode) {
        ui.inventory.classList.add('sorting-mode');
        ui.manualSortBtn.innerHTML = "✅ 完了";
        ui.manualSortBtn.style.background = "#ffd54f"; // Active color
        ui.manualSortBtn.style.color = "black";
        log("🖐️ 並べ替えモード：2つのアイテムを順番にクリックして入れ替えます。");
    } else {
        ui.inventory.classList.remove('sorting-mode');
        ui.manualSortBtn.innerHTML = "🖐️ 並べ替え";
        ui.manualSortBtn.style.background = "rgba(255,255,255,0.5)";
        ui.manualSortBtn.style.color = "#666";
        log("並べ替えモード終了。");
    }
    renderInventory();
}

function renderInventory() {
    // console.log('Rendering Inv. ManualMode:', isManualSortMode, 'Selected:', selectedSortItemId);
    ui.inventory.innerHTML = '';

    // Ensure order list contains all current items and no extras (sync check)
    const currentIds = Object.keys(inventoryCounts);
    // Add missing
    currentIds.forEach(id => {
        if (!userInventoryOrder.includes(id)) userInventoryOrder.push(id);
    });
    // Remove stale (only if count is truly 0/missing)
    userInventoryOrder = userInventoryOrder.filter(id => inventoryCounts[id] && inventoryCounts[id] > 0);

    if (userInventoryOrder.length === 0) {
        ui.inventory.innerHTML = '<div style="padding:10px; color:#999;">倉庫は空です。<br>フィールドで素材を集めましょう。</div>';
        return;
    }

    const query = ui.inventorySearch ? ui.inventorySearch.value.trim().toLowerCase() : '';
    const fragment = document.createDocumentFragment();

    userInventoryOrder.forEach((id, index) => {
        const data = ELEMENTS[id];
        if (!data) return; // Safety check
        const displayName = getItemName(id);
        // Filter by Search Query
        if (query && !displayName.toLowerCase().includes(query) && !data.name.toLowerCase().includes(query)) {
            return; // Skip rendering
        }

        const count = inventoryCounts[id];

        const card = document.createElement('div');
        card.className = 'element-card pop-anim';
        // Remove expensive animation class after render if possible, or keep it light.
        // card.style.willChange = 'transform'; // Optimization hint

        if (isManualSortMode && selectedSortItemId === id) {
            card.classList.add('selected-sort');
        }

        card.draggable = !isManualSortMode; // Disable drag in sort mode
        card.dataset.id = id;
        card.dataset.index = index;

        // Visual Selection Logic (Inline for safety)
        if (isManualSortMode && selectedSortItemId === id) {
            card.classList.add('selected-sort');
        }

        card.innerHTML = `
            <div class="element-emoji">${data.emoji}</div>
            <div class="element-name">${data.name}</div>
            <div class="count-badge">x${count}</div>
        `;

        // Optimize click handler (use event delegation on container ideally, but per-card is OK if fragments used)
        card.onclick = () => onInventoryClick(id);

        // Drag Events
        if (!isManualSortMode) {
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragenter', handleDragEnter);
            card.addEventListener('dragover', handleDragOver);
            card.addEventListener('dragleave', handleDragLeave);
            card.addEventListener('drop', handleDropRobust); // Changed to Robust handler
            card.addEventListener('dragend', handleDragEnd);
        }

        fragment.appendChild(card);
    });

    ui.inventory.appendChild(fragment);

}

// === Drag and Drop Logic ===
let dragSrcEl = null;

function handleDragStart(e) {
    console.log('Drag Start:', this.dataset.id);
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
    this.classList.add('dragging');
}

function handleDragEnter(e) {
    if (e.preventDefault) e.preventDefault();
    this.classList.add('drag-over');
    return false;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    this.classList.remove('drag-over');

    if (dragSrcEl !== this) {
        const srcId = dragSrcEl.dataset.id;
        const targetId = this.dataset.id;

        const srcIndex = userInventoryOrder.indexOf(srcId);
        const targetIndex = userInventoryOrder.indexOf(targetId);

        if (srcIndex > -1 && targetIndex > -1) {
            // Remove src
            userInventoryOrder.splice(srcIndex, 1);
            // Insert at target
            userInventoryOrder.splice(targetIndex, 0, srcId);

            saveGame();
            renderInventory(); // Re-render to reflect new order
        }
    }
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.element-card').forEach(card => {
        card.classList.remove('drag-over');
    });
}

function handleDropRobust(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    this.classList.remove('drag-over');

    const srcId = e.dataTransfer.getData('text/plain');
    const targetId = this.dataset.id;
    console.log('Drop Robust:', srcId, '->', targetId);

    if (srcId && srcId !== targetId) {
        const srcIndex = userInventoryOrder.indexOf(srcId);
        if (srcIndex > -1) {
            userInventoryOrder.splice(srcIndex, 1);
        }

        let targetIndex = userInventoryOrder.indexOf(targetId);
        if (targetIndex === -1) targetIndex = userInventoryOrder.length;

        userInventoryOrder.splice(targetIndex, 0, srcId);

        console.log('New Order:', userInventoryOrder);
        saveGame();
        renderInventory();
    }
    return false;
}

function addItem(id, amount) {
    if (!inventoryCounts[id]) {
        inventoryCounts[id] = 0;
        if (!userInventoryOrder.includes(id)) {
            userInventoryOrder.push(id);
        }
    }
    inventoryCounts[id] += amount;

    if (!discovered.has(id)) {
        discovered.add(id);
        const dName = getItemName(id);
        log(`${getText('discovery')} [${dName}]`);
        updateStats();
        updateCivilizationLevel();
    }

    debouncedSaveGame(); // Optimized save
    renderInventory();
}

function consumeItem(id, amount) {
    if ((inventoryCounts[id] || 0) >= amount) {
        inventoryCounts[id] -= amount;
        if (inventoryCounts[id] <= 0) {
            delete inventoryCounts[id];
            // Remove from order list if we want to clean up, 
            // but keeping it might be better for preserving position if re-acquired.
            // For now, let's remove it to keep the view clean.
            userInventoryOrder = userInventoryOrder.filter(itemId => itemId !== id);
        }

        debouncedSaveGame(); // Optimized save
        renderInventory();
        return true;
    }
    return false;
}


// === Crafting ===
function setupCraftingUI() {
    ui.slot1.addEventListener('click', () => clearSlot(1));
    ui.slot2.addEventListener('click', () => clearSlot(2));
    ui.slot3.addEventListener('click', () => clearSlot(3));
    ui.slot4.addEventListener('click', () => clearSlot(4));
    ui.slot5.addEventListener('click', () => clearSlot(5));

    document.getElementById('craft-btn').addEventListener('click', executeCraft);
    document.getElementById('reset-slots-btn').addEventListener('click', resetSlots);
}

function putToSlot(id) {
    if (ui.labView.style.display === 'none') {
        switchView('lab');
    }

    // Check if player has enough items compared to what's already in slots
    let currentInSlots = 0;
    if (slot1 === id) currentInSlots++;
    if (slot2 === id) currentInSlots++;
    if (slot3 === id) currentInSlots++;
    if (slot4 === id) currentInSlots++;
    if (slot5 === id) currentInSlots++;

    if (inventoryCounts[id] <= currentInSlots) {
        log(`[${getItemName(id)}] の在庫が足りません！`);
        return;
    }

    if (!slot1) setSlot(1, id);
    else if (!slot2) setSlot(2, id);
    else if (!slot3) setSlot(3, id);
    else if (!slot4) setSlot(4, id);
    else if (!slot5) setSlot(5, id);
    else {
        // Reset and put in slot 1 (assuming count check passed or it's a new flow, 
        // but if inventory is 1, and we reset, it is fine since we clear others)
        // Re-check inventory for safety if we are resetting logic
        if (inventoryCounts[id] < 1) {
            log(`[${getItemName(id)}] の在庫が足りません！`);
            return;
        }
        setSlot(1, id);
        clearSlot(2);
        clearSlot(3);
        clearSlot(4);
        clearSlot(5);
        clearResult();
    }
}

function setSlot(num, id) {
    if (num === 1) slot1 = id;
    else if (num === 2) slot2 = id;
    else if (num === 3) slot3 = id;
    else if (num === 4) slot4 = id;
    else slot5 = id;

    let el;
    if (num === 1) el = ui.slot1;
    else if (num === 2) el = ui.slot2;
    else if (num === 3) el = ui.slot3;
    else if (num === 4) el = ui.slot4;
    else el = ui.slot5;
    const data = ELEMENTS[id];

    el.innerHTML = `
        <div class="element-emoji">${data.emoji}</div>
        <div class="element-name">${data.name}</div>
    `;
    el.classList.remove('empty');
    el.classList.add('filled');

    clearResult();
}

function clearSlot(num) {
    if (num === 1) slot1 = null;
    else if (num === 2) slot2 = null;
    else if (num === 3) slot3 = null;
    else if (num === 4) slot4 = null;
    else slot5 = null;

    let el;
    if (num === 1) el = ui.slot1;
    else if (num === 2) el = ui.slot2;
    else if (num === 3) el = ui.slot3;
    else if (num === 4) el = ui.slot4;
    else el = ui.slot5;

    const label = num === 1 ? 'A' : (num === 2 ? 'B' : (num === 3 ? 'C' : (num === 4 ? 'D' : 'E')));
    el.innerHTML = `<span class="slot-placeholder">素材${label}</span>`;
    el.classList.remove('filled');
    el.classList.add('empty');
    clearResult();
}

function resetSlots() {
    clearSlot(1);
    clearSlot(2);
    clearSlot(3);
    clearSlot(4);
    clearSlot(5);
}

function clearResult() {
    ui.result.innerHTML = `<span class="slot-placeholder">?</span>`;
    ui.result.classList.remove('filled');
    ui.result.parentElement.classList.remove('pop-anim');
}

function executeCraft() {
    if (!slot1 || !slot2) {
        log("素材が足りません。（最低2つ必要）");
        return;
    }

    const currentInputs = [slot1, slot2];
    if (slot3) currentInputs.push(slot3);
    if (slot4) currentInputs.push(slot4);
    if (slot5) currentInputs.push(slot5);

    const key = currentInputs.sort().join('+');
    let resultId = NORMALIZED_RECIPES[key];

    // Special Unlock for Contact Process
    const contactProcessKey = ['fresh_water', 'fuming_sulfuric_acid'].sort().join('+');
    if (key === contactProcessKey) {
        if (!discovered.has('contact_process_flag')) {
            discovered.add('contact_process_flag');
            log("✨ 【工業化学】 接触法の実装に成功！硫酸が再利用可能になりました！");
            updateStats();
        }
    }

    // Special Unlock for Ostwald Process
    const ostwaldProcessKey = ['ammonia', 'oxygen', 'platinum'].sort().join('+');
    if (key === ostwaldProcessKey) {
        if (!discovered.has('platinum_catalyst_flag')) {
            discovered.add('platinum_catalyst_flag');
            log("✨ 【工業化学】 オストワルト法の実装に成功！硝酸が再利用可能になりました！");
            updateStats();
        }
        if (!discovered.has('platinum_catalyst_flag')) {
            discovered.add('platinum_catalyst_flag');
            log("✨ 【工業化学】 オストワルト法の実装に成功！硝酸が再利用可能になりました！");
            updateStats();
        }
    }

    // Special Unlock for Sabatier Reaction
    const sabatierProcessKey = ['carbon_dioxide', 'hydrogen', 'sabatier_reactor'].sort().join('+');
    if (key === sabatierProcessKey) {
        if (!discovered.has('sabatier_reaction_flag')) {
            discovered.add('sabatier_reaction_flag');
            log("✨ 【工業化学】 サバティエ反応の実装に成功！メタンが再利用可能になりました！");
            updateStats();
        }
    }

    // Dynamic Recipe: Battery (Electrode A + Electrode B + Salt Water)
    // Electrode can be carbon-based or metal-based, but both cannot be carbon-based
    if (!resultId && currentInputs.length === 3 && currentInputs.includes('salt_water')) {
        const CARBON_ELECTRODES = ['coke', 'charcoal', 'carbon_rod', 'graphite'];
        const METAL_ELECTRODES = ['lead', 'manganese', 'tin', 'copper', 'iron', 'silver', 'platinum', 'zinc', 'tungsten', 'magnesium'];
        const ALL_ELECTRODES = [...CARBON_ELECTRODES, ...METAL_ELECTRODES];

        const electrodes = currentInputs.filter(item => item !== 'salt_water');
        if (electrodes.length === 2) {
            const [a, b] = electrodes;
            // Both must be valid electrodes
            if (ALL_ELECTRODES.includes(a) && ALL_ELECTRODES.includes(b)) {
                // They must be different
                if (a !== b) {
                    // If both are carbon-based, it's invalid
                    if (!(CARBON_ELECTRODES.includes(a) && CARBON_ELECTRODES.includes(b))) {
                        resultId = 'battery';
                    }
                }
            }
        }
    }

    if (resultId) {
        // Count how many of each item are needed
        const needed = {};
        currentInputs.forEach(id => {
            needed[id] = (needed[id] || 0) + 1;
        });

        // Check if player has enough
        for (const [id, count] of Object.entries(needed)) {
            if (!inventoryCounts[id] || inventoryCounts[id] < count) {
                const iName = getItemName(id);
                log(`素材が足りません！[${iName}]が不足しています。`);
                renderInventory();
                return;
            }
        }

        // Tools that are not consumed
        const reusableIds = [...BASE_REUSABLE_ITEMS];
        if (discovered.has('platinum_catalyst_flag')) reusableIds.push('nitric_acid');
        if (discovered.has('contact_process_flag')) reusableIds.push('sulfuric_acid');
        if (discovered.has('hydroelectric_power')) reusableIds.push('electricity');
        if (discovered.has('hydroelectric_power')) reusableIds.push('electricity');
        if (discovered.has('high_pressure_reactor')) reusableIds.push('ammonia');
        if (discovered.has('sabatier_reaction_flag')) reusableIds.push('methane');

        currentInputs.forEach(id => {
            // Special Exception: Earthenware breaks when making Shards
            if (id === 'earthenware' && (resultId === 'shards' || (Array.isArray(resultId) && resultId.includes('shards')))) {
                consumeItem(id, 1);
                return;
            }

            if (!reusableIds.includes(id)) {
                consumeItem(id, 1);
            }
        });

        // Handle Single or Multiple Results
        const results = Array.isArray(resultId) ? resultId : [resultId];

        results.forEach(resId => {
            addItem(resId, 1);
        });

        const mainResId = results[0];
        const resData = ELEMENTS[mainResId];
        ui.result.innerHTML = `
            <div class="element-emoji">${resData.emoji}</div>
            <div class="element-name">${getItemName(mainResId)}${results.length > 1 ? ' など' : ''}</div>
        `;
        ui.result.classList.add('filled');
        ui.result.parentElement.classList.add('pop-anim');

        if (results.length > 1) {
            const names = results.map(r => getItemName(r)).join(' と ');
            log(`${getText('craftSuccess')} [${names}]`);
        } else {
            log(`${getText('craftSuccess')} [${getItemName(mainResId)}]`);
            if (GREAT_INVENTIONS[mainResId]) {
                setTimeout(() => {
                    log(`🎉 【偉大な研究】 ${GREAT_INVENTIONS[mainResId]}`);
                }, 800);
            }
        }
        resetSlots();

    } else {
        log("合成失敗...何も起こりませんでした。");
        [ui.slot1, ui.slot2, ui.slot3, ui.slot4].forEach(slot => {
            slot.parentElement.classList.add('shake-anim');
            setTimeout(() => {
                slot.parentElement.classList.remove('shake-anim');
            }, 500);
        });
    }
}

// === Refining ===
function refineOre() {
    const FUEL_ID = 'charcoal';
    const FIRE_ID = 'fire';
    const OVEN_ID = 'earthenware';

    // 1. Check for Fuel, Fire, and Oven first
    if (!inventoryCounts[FUEL_ID] || inventoryCounts[FUEL_ID] < 1) {
        log("燃料の[木炭]がありません。乾留所で作りましょう。");
        return;
    }
    if (!inventoryCounts[FIRE_ID] || inventoryCounts[FIRE_ID] < 1) {
        log("炉を熱するための[火]が必要です。");
        return;
    }
    if (!inventoryCounts[OVEN_ID] || inventoryCounts[OVEN_ID] < 1) {
        log("炉として使う[土器]が必要です。");
        return;
    }

    // 2. Determine target candidates
    const candidates = [
        { id: 'noble_lead', result: 'silver', req: ['ash_cupel', 'air'], reqMsg: "Cupellation requires [Ash Cupel] and [Air]." },
        { id: 'lead_oxide', result: 'lead' },
        { id: 'manganese_monoxide', result: 'manganese' },
        { id: 'cassiterite', result: 'tin' },
        { id: 'iron_ore', result: 'iron' },
        { id: 'magnetite', result: 'iron' },
        { id: 'iron_sand', result: 'iron' },
        { id: 'cinnabar', result: 'mercury' },
        { id: 'bismuth_ore', result: 'bismuth' }
    ];

    const possible = [];
    candidates.forEach(c => {
        if (inventoryCounts[c.id] && inventoryCounts[c.id] > 0) {
            // Check specific requirements
            let met = true;
            if (c.req) {
                c.req.forEach(r => {
                    if (!inventoryCounts[r] || inventoryCounts[r] < 1) met = false;
                });
            }
            if (met) {
                possible.push(c);
            }
        }
    });

    if (possible.length === 0) {
        log("製錬できる鉱石がありません（鉄鉱石、酸化鉛、スズ石など）。");
        return;
    }

    if (possible.length === 1) {
        executeRefining(possible[0]);
    } else {
        const msgP = log("製錬する鉱石を選択：");
        const btnContainer = document.createElement('div');
        btnContainer.className = 'choice-container';
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '8px';
        btnContainer.style.padding = '8px 0';
        btnContainer.style.flexWrap = 'wrap';

        possible.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.style.padding = '4px 12px';
            btn.style.borderRadius = '15px';
            btn.style.border = '1px solid #2e7d32';
            btn.style.background = 'white';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '0.85rem';
            btn.innerText = getItemName(p.id);

            btn.onclick = () => {
                executeRefining(p);
                btnContainer.remove();
                msgP.remove();
            };
            btnContainer.appendChild(btn);
        });
        ui.msgLog.prepend(btnContainer);
    }
}

function executeRefining(target) {
    const FUEL_ID = 'charcoal';
    consumeItem(target.id, 1);
    consumeItem(FUEL_ID, 1);
    addItem(target.result, 1);

    const resData = ELEMENTS[target.result];
    const srcName = getItemName(target.id);
    const resName = getItemName(target.result);
    log(`${getText('refined')} ${srcName} -> [${resName}${resData.emoji}]`);
}

function distillWater() {
    const hasEarthenware = inventoryCounts['earthenware'] && inventoryCounts['earthenware'] > 0;
    const hasFire = inventoryCounts['fire'] && inventoryCounts['fire'] > 0;

    if (!hasEarthenware || !hasFire) {
        log("蒸留器具がありません！[土器🏺]と[火🔥]が必要です。");
        return;
    }

    const candidates = [
        { id: 'water', type: 'sea', name: '海水 (-> 水 + 塩)' },
        { id: 'wine', type: 'wine', name: 'ワイン (-> 水 + アルコール)' },
        { id: 'wood_vinegar', type: 'wood_vinegar', name: '木酢液 (-> メタノール)' },
        { id: 'calcium_acetate', type: 'calcium_acetate', name: '酢酸カルシウム (-> メタノール)' },
        { id: 'coal_tar', type: 'coal_tar', name: 'コールタール (-> 分留)', req: 'glass_vessel' },
        { id: 'crude_phenol', type: 'crude_phenol', name: '粗フェノール (-> フェノール)' },
        { id: 'naphthalene', type: 'naphthalene', name: 'ナフタレン (-> 精製)' },
        { id: 'anhydrous_sodium_acetate', type: 'anhydrous_sodium_acetate', name: '無水酢酸ナトリウム + 硫酸', req: 'sulfuric_acid' }
    ];

    const possible = candidates.filter(c => {
        if (c.req) {
            return inventoryCounts[c.id] > 0 && inventoryCounts[c.req] > 0;
        }
        return inventoryCounts[c.id] && inventoryCounts[c.id] > 0;
    });

    if (possible.length === 0) {
        log("蒸留できるものがありません（海水、ワインなど）。");
        return;
    }

    if (possible.length === 1) {
        executeDistillation(possible[0]);
    } else {
        const msgP = log("蒸留する素材を選択：");
        const btnContainer = document.createElement('div');
        btnContainer.className = 'choice-container';
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '8px';
        btnContainer.style.padding = '8px 0';
        btnContainer.style.flexWrap = 'wrap';

        possible.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.style.padding = '4px 12px';
            btn.style.borderRadius = '15px';
            btn.style.border = '1px solid #29b6f6';
            btn.style.background = 'white';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '0.85rem';
            btn.innerText = p.name;

            btn.onclick = () => {
                executeDistillation(p);
                btnContainer.remove();
                msgP.remove();
            };
            btnContainer.appendChild(btn);
        });
        ui.msgLog.prepend(btnContainer);
    }
}

function executeDistillation(target) {
    consumeItem(target.id, 1);
    if (target.type === 'wine') {
        addItem('fresh_water', 1);
        addItem('alcohol', 1);
        log(`蒸留完了！ワインから[水💧]と[アルコール🧪]を抽出しました。`);
    } else if (target.type === 'wood_vinegar') {
        addItem('crude_wood_alcohol', 1);
        log(`蒸留完了！木酢液から[粗木アルコール🧪]を抽出しました。`);
    } else if (target.type === 'calcium_acetate') {
        addItem('methanol', 1);
        log(`乾留完了！酢酸カルシウムから[メタノール🧪]を抽出しました。`);
    } else if (target.type === 'coal_tar') {
        addItem('light_oil', 1);
        addItem('middle_oil', 1);
        addItem('heavy_oil', 1);
        addItem('anthracene_oil', 1);
        addItem('pitch', 1);
        addItem('pitch', 1);
        log(`分留完了！コールタールを[軽油⛽]、[中油🧪]、[重油🛢️]、[アントラセン油🧪]、[ピッチ⬛]に分離しました！`);
    } else if (target.type === 'crude_phenol') {
        addItem('phenol', 1);
        log(`蒸留完了！粗フェノールを[フェノール🧪]に精製しました！`);
    } else if (target.type === 'naphthalene') {
        addItem('industrial_naphthalene', 1);
        log(`昇華完了！[工業用ナフタレン🏭]に精製しました！`);
    } else if (target.type === 'anhydrous_sodium_acetate') {
        consumeItem('sulfuric_acid', 1);
        addItem('glacial_acetic_acid', 1);
        addItem('sodium_sulfate', 1);
        log(`蒸留完了！[氷酢酸🧪]と[硫酸ナトリウム🧪]を生成しました！`);
    } else {
        addItem('fresh_water', 1);
        addItem('salt', 1);
        log(`${getText('distilled')} [${getItemName('fresh_water')}💧] + [${getItemName('salt')}🧂]`);
    }
}

function carbonizeWood() {
    const FIRE_ID = 'fire';
    const OVEN_ID = 'earthenware';

    if (!inventoryCounts[FIRE_ID] || inventoryCounts[FIRE_ID] < 1) {
        log("乾留には[火]が必要です。弓で火を起こしましょう！");
        return;
    }
    if (!inventoryCounts[OVEN_ID] || inventoryCounts[OVEN_ID] < 1) {
        log("密閉容器として[土器]が必要です。");
        return;
    }

    const candidates = [
        { id: 'coal', name: '石炭', type: 'coal' },
        { id: 'wood', name: '木材', type: 'wood' },
        { id: 'calcium_acetate', name: '酢酸カルシウム', type: 'calcium_acetate' }
    ];

    const possible = candidates.filter(c => inventoryCounts[c.id] && inventoryCounts[c.id] > 0);

    if (possible.length === 0) {
        log("乾留できるものがありません（木材、石炭、酢酸カルシウム）。");
        return;
    }

    if (possible.length === 1) {
        executeCarbonization(possible[0]);
    } else {
        const msgP = log("乾留する素材を選択：");
        const btnContainer = document.createElement('div');
        btnContainer.className = 'choice-container';
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '8px';
        btnContainer.style.padding = '8px 0';
        btnContainer.style.flexWrap = 'wrap';

        possible.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.style.padding = '4px 12px';
            btn.style.borderRadius = '15px';
            btn.style.border = '1px solid #4e342e';
            btn.style.background = 'white';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '0.85rem';
            btn.innerText = p.name;

            btn.onclick = () => {
                executeCarbonization(p);
                btnContainer.remove();
                msgP.remove();
            };
            btnContainer.appendChild(btn);
        });
        ui.msgLog.prepend(btnContainer);
    }
}

function executeCarbonization(target) {
    consumeItem(target.id, 1);
    if (target.type === 'coal') {
        addItem('coke', 1);
        addItem('coal_tar', 1);
        addItem('coal_gas', 1);
        log("乾留完了！石炭から[コークス⬛]、[コールタール🏺]、[石炭ガス💨]を抽出しました。");
    } else if (target.type === 'wood') {
        addItem('charcoal', 1);
        let resultLog = `乾留完了！木材から[木炭⬛]を作成しました。`;
        if (Math.random() < 0.5) {
            addItem('wood_vinegar', 1);
            resultLog += `[木酢液🏺]も採取できました！`;
        }
        log(resultLog);
    } else if (target.type === 'calcium_acetate') {
        addItem('acetone', 1);
        addItem('calcium_carbonate', 1);
        log(`乾留完了！酢酸カルシウムから[アセトン🧪]と[炭酸カルシウム🦴]を抽出しました！`);
    }
}

function performExtraction() {
    // Candidates
    const candidates = [];

    // 1. Benzene Extraction
    if (inventoryCounts['light_oil'] > 0 && inventoryCounts['sulfuric_acid'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'benzene_synthesis',
            name: '軽油 + 硫酸 + 水酸化ナトリウム (-> ベンゼン)',
            req: ['light_oil', 'sulfuric_acid', 'sodium_hydroxide'],
            result: 'benzene'
        });
    }

    // 2. Phenoxide & Crude Naphthalene Extraction (Middle Oil + NaOH)
    if (inventoryCounts['middle_oil'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'phenoxide_extraction',
            name: '中油 + 水酸化ナトリウム (-> フェノキシド + 粗ナフタレン)',
            req: ['middle_oil', 'sodium_hydroxide'],
            results: ['phenoxide', 'crude_naphthalene'] // Special handler needed or adjust executeExtraction
        });
    }

    // 3. Naphthalene Purification (Crude Naphthalene + Sulfuric Acid + NaOH)
    if (inventoryCounts['crude_naphthalene'] > 0 && inventoryCounts['sulfuric_acid'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'naphthalene_purification',
            name: '粗ナフタレン + 硫酸 + 水酸化ナトリウム (-> ナフタレン)',
            req: ['crude_naphthalene', 'sulfuric_acid', 'sodium_hydroxide'],
            result: 'naphthalene'
        });
    }

    if (candidates.length === 0) {
        log("抽出できる組み合わせがありません（軽油 + 硫酸 + 水酸化ナトリウムなど）。");
        return;
    }

    if (candidates.length === 1) {
        executeExtraction(candidates[0]);
    } else {
        const msgP = log("抽出プロセスを選択：");
        const btnContainer = document.createElement('div');
        btnContainer.className = 'choice-container';
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '8px';
        btnContainer.style.padding = '8px 0';
        btnContainer.style.flexWrap = 'wrap';

        candidates.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.style.padding = '4px 12px';
            btn.style.borderRadius = '15px';
            btn.style.border = '1px solid #66bb6a';
            btn.style.background = 'white';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '0.85rem';
            btn.innerText = p.name;

            btn.onclick = () => {
                executeExtraction(p);
                btnContainer.remove();
                msgP.remove();
            };
            btnContainer.appendChild(btn);
        });
        ui.msgLog.prepend(btnContainer);
        return; // Fixed logic
    }
}

function executeExtraction(target) {
    if (target.req) {
        target.req.forEach(r => consumeItem(r, 1));
    } else {
        consumeItem(target.id, 1);
    }

    if (target.results) {
        let msg = "抽出完了！化学分離しました ";
        target.results.forEach(rid => {
            addItem(rid, 1);
            const rd = ELEMENTS[rid];
            const rName = getItemName(rid);
            msg += `[${rName}${rd.emoji}] `;
        });
        msg += "!";
        log(msg);
    } else {
        addItem(target.result, 1);
        const resData = ELEMENTS[target.result];
        const resName = getItemName(target.result);
        log(`${getText('extracted')} [${resName}${resData.emoji}]`);
    }
}

function refineCrudeOil() {
    if (!inventoryCounts['crude_oil'] || inventoryCounts['crude_oil'] < 1) {
        log("[原油]がありません。");
        return;
    }

    consumeItem('crude_oil', 1);

    const oilProducts = ['lp_gas', 'gasoline', 'naphtha', 'kerosene', 'light_oil', 'heavy_oil', 'asphalt'];
    let msg = "精製完了！原油を以下の製品に分離しました：<br>";

    oilProducts.forEach(prod => {
        addItem(prod, 1);
        const d = ELEMENTS[prod];
        const pName = getItemName(prod);
        msg += `[${pName}${d.emoji}] `;
    });
    log(msg);
}

function log(msg) {
    const p = document.createElement('p');
    p.innerHTML = msg;
    ui.msgLog.prepend(p);
    if (ui.msgLog.children.length > 30) ui.msgLog.lastElementChild.remove();
    return p;
}

// === Encyclopedia ===
function updateStats() {
    const total = Object.keys(ELEMENTS).length;
    const found = Array.from(discovered).filter(id => ELEMENTS[id]).length;
    const percent = ((found / total) * 100).toFixed(2);

    document.getElementById('discovery-count').innerText = found;
    document.getElementById('total-count').innerText = total;

    // Update Encyclopedia Progress Bar
    const epb = document.getElementById('discovery-progress-bar');
    const ept = document.getElementById('discovery-progress-text');
    if (epb) epb.style.width = `${percent}%`;
    if (ept) ept.innerText = `${percent}%`;

    // Update Sidebar Progress Bar
    const spb = document.getElementById('sidebar-progress-bar');
    const spt = document.getElementById('sidebar-progress-text');
    if (spb) spb.style.width = `${percent}%`;
    if (spt) spt.innerText = `${percent}%`;

    // Update Industrial List
    updateIndustrialList();

    // Check for Oil Field Unlock
    if (discovered.has('steam_engine')) {
        const oilSpot = document.querySelector('.gather-spot[data-id="oil"]');
        if (oilSpot && oilSpot.style.display === 'none') {
            oilSpot.style.display = 'flex';
            if (!isLoading && !unlockedFeats.has('oil_field_unlock')) {
                log("【新発見】 蒸気機関の発明により採掘技術が向上しました。[油田]が解放されました！");
                unlockedFeats.add('oil_field_unlock');
                saveGame();
            }
        }
    }

    // Check for Oil Refinery Unlock (Distillation Tower)
    if (discovered.has('distillation_tower')) {
        const refinerySection = document.getElementById('oil-refinery-section');
        if (refinerySection && refinerySection.style.display === 'none') {
            refinerySection.style.display = 'block';
            if (!isLoading && !unlockedFeats.has('refinery_unlock')) {
                log("【新設備】 蒸留塔の建設により[製油所]が稼働可能になりました！");
                unlockedFeats.add('refinery_unlock');
                saveGame();
            }
        }
    }

    // Check for Foreign Land Unlock (Steamship)
    if (discovered.has('steamship')) {
        const foreignSpot = document.querySelector('.gather-spot[data-id="foreign"]');
        if (foreignSpot && foreignSpot.style.display === 'none') {
            foreignSpot.style.display = 'flex';
            if (!isLoading && !unlockedFeats.has('foreign_unlock')) {
                log("【新天地】 蒸気船の建造により海を渡れるようになりました！[世界地図]が解放されました！");
                unlockedFeats.add('foreign_unlock');
                saveGame();
            }
        }
    }

    // Check for All Elements Discovery
    if (found === total && !unlockedFeats.has('all_elements_discovered') && !isLoading) {
        log("🎉 **おめでとうございます！** 全ての要素を発見しました！あなたは自然と科学のマスターです！");
        unlockedFeats.add('all_elements_discovered');
        saveGame();
    }

    // Check for Shop Unlock (Cowrie)
    if (discovered.has('cowrie')) {
        if (ui.navShop && ui.navShop.style.display === 'none') {
            ui.navShop.style.display = 'block';
            if (!isLoading && !unlockedFeats.has('shop_unlock')) {
                log("💰 【貨幣の発見】 タカラガイを見つけました！[交換所]がオープンしました！");
                unlockedFeats.add('shop_unlock');
                saveGame();
            }
        }
    }
}

// === Shop Logic ===
function renderShop() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Update Tabs Style
    const tabBuy = document.getElementById('tab-buy');
    const tabSell = document.getElementById('tab-sell');

    if (currentShopTab === 'buy') {
        tabBuy.classList.add('active'); tabBuy.classList.remove('secondary');
        tabSell.classList.remove('active'); tabSell.classList.add('secondary');
    } else {
        tabSell.classList.add('active'); tabSell.classList.remove('secondary');
        tabBuy.classList.remove('active'); tabBuy.classList.add('secondary');
    }

    // Update Sort Controls UI
    const sId = document.getElementById('shop-sort-id-btn');
    const sPriceAsc = document.getElementById('shop-sort-price-asc-btn');
    const sPriceDesc = document.getElementById('shop-sort-price-desc-btn');

    // Reset all first
    if (sId) { sId.style.color = '#999'; sId.style.fontWeight = 'normal'; }
    if (sPriceAsc) { sPriceAsc.style.color = '#999'; sPriceAsc.style.fontWeight = 'normal'; }
    if (sPriceDesc) { sPriceDesc.style.color = '#999'; sPriceDesc.style.fontWeight = 'normal'; }

    if (currentShopSortMode === 'id') {
        if (sId) { sId.style.color = '#333'; sId.style.fontWeight = 'bold'; }
    } else if (currentShopSortMode === 'price_asc') {
        if (sPriceAsc) { sPriceAsc.style.color = '#333'; sPriceAsc.style.fontWeight = 'bold'; }
    } else if (currentShopSortMode === 'price_desc') {
        if (sPriceDesc) { sPriceDesc.style.color = '#333'; sPriceDesc.style.fontWeight = 'bold'; }
    }

    // Update Money
    if (ui.playerMoney) ui.playerMoney.innerText = playerMoney;

    const allIds = Object.keys(ELEMENTS);

    // Only show discovered items
    const visibleIds = allIds.filter(id => discovered.has(id));

    // Sort: Discovered items (Buy: all discovered, Sell: inventory items)
    let targetIds = [];
    if (currentShopTab === 'buy') {
        targetIds = visibleIds;
    } else {
        // Sell mode: items in inventory
        targetIds = Object.keys(inventoryCounts).filter(id => (inventoryCounts[id] || 0) > 0);
    }

    // Filter out invalid IDs (stale data)
    targetIds = targetIds.filter(id => ELEMENTS[id]);

    // Filter by Search Query
    if (currentShopSearchQuery) {
        targetIds = targetIds.filter(id => {
            const data = ELEMENTS[id];
            return data.name.toLowerCase().includes(currentShopSearchQuery) ||
                (data.desc && data.desc.toLowerCase().includes(currentShopSearchQuery));
        });
    }

    // Filter out Money Items (Cannot buy/sell money itself)
    const MONEY_ITEMS = ['cowrie', 'coin', 'paper_money', 'credit_card', 'cashless_payment', 'nft', 'air'];
    targetIds = targetIds.filter(id => !MONEY_ITEMS.includes(id));

    // Filter out concepts, phenomena, etc. (Non-physical goods)
    const EXCLUDED_CATEGORIES = ['concept', 'phenomenon', 'data', 'life', 'nature', 'waste'];
    targetIds = targetIds.filter(id => {
        const data = ELEMENTS[id];
        return !EXCLUDED_CATEGORIES.includes(data.category);
    });

    // Sort Logic
    targetIds.sort((a, b) => {
        if (currentShopSortMode === 'price_asc') {
            const pA = calculatePrice(a);
            const pB = calculatePrice(b);
            return pA - pB; // Low to High
        } else if (currentShopSortMode === 'price_desc') {
            const pA = calculatePrice(a);
            const pB = calculatePrice(b);
            return pB - pA; // High to Low
        } else {
            // ID Sort
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    });

    targetIds.forEach(id => {
        const data = ELEMENTS[id];
        const card = document.createElement('div');
        card.className = 'element-card';
        // Price Calculation Logic
        const price = calculatePrice(id);

        if (currentShopTab === 'buy') {
            // Buy Mode
            card.innerHTML = `
                <div class="element-emoji">${data.emoji}</div>
                <div class="element-name">${data.name}</div>
                <div style="font-size:0.8rem; color:#d84315; font-weight:bold;">${price} G</div>
            `;
            card.onclick = () => buyItem(id, price);
        } else {
            // Sell Mode
            const sellPrice = Math.floor(price / 5) || 1; // Sell price is 1/5
            const count = inventoryCounts[id] || 0;
            card.innerHTML = `
                <div class="element-emoji">${data.emoji}</div>
                <div class="element-name">${data.name}</div>
                <div class="count-badge">x${count}</div>
                <div style="font-size:0.8rem; color:#2e7d32; font-weight:bold;">売却: ${sellPrice} G</div>
            `;
            card.onclick = () => sellItem(id, sellPrice);
        }
        grid.appendChild(card);
    });
}
// Keep calculatePrice below
function calculatePrice(id) {
    // Simple logic based on ID length hash or predefined categories
    // For now, let's make it simple: 100G base.
    // Ideally should be based on complexity/tier.

    // Temporary tier check using recipe depth is hard to calculate dynamically.
    // Using string hash mod 500 + 50
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash += id.charCodeAt(i);

    let base = 100;
    const data = ELEMENTS[id];

    if (data.category === 'natural') base = 50;
    if (data.category === 'chemical') base = 150;
    if (data.category === 'tool') base = 300;
    if (data.category === 'machine') base = 1000;
    if (GREAT_INVENTIONS[id]) base += 2000; // Rare items

    return base + (hash % 100);
}

function buyItem(id, price) {
    if (playerMoney >= price) {
        playerMoney -= price;
        addItem(id, 1);
        if (ui.playerMoney) ui.playerMoney.innerText = playerMoney;
        log(`購入しました: [${getItemName(id)}] (-${price}G)`);
        renderShop(); // Refresh to update money display (and maybe gray out if discrete)
        saveGame();
    } else {
        log("お金が足りません！");
    }
}

function sellItem(id, price) {
    if ((inventoryCounts[id] || 0) > 0) {
        consumeItem(id, 1);
        playerMoney += price;
        if (ui.playerMoney) ui.playerMoney.innerText = playerMoney;
        log(`売却しました: [${getItemName(id)}] (+${price}G)`);

        // Re-render only this card to prevent full flicker, or full renderShop
        renderShop();
        saveGame();
    } else {
        log("在庫がありません！");
    }
}

function updateCivilizationLevel(silent = false) {
    let maxLevel = 0;
    CIVILIZATION_LEVELS.forEach(civ => {
        if (civ.trigger === null || discovered.has(civ.trigger)) {
            if (civ.level > maxLevel) maxLevel = civ.level;
        }
    });

    if (maxLevel > currentCivilizationLevel) {
        currentCivilizationLevel = maxLevel;
        if (!silent && !isLoading) {
            const civData = CIVILIZATION_LEVELS.find(c => c.level === maxLevel);
            log(`🎉 **文明レベルアップ！** [Lv.${maxLevel} ${civData.name}] に到達しました！`);
            log(`📜 ${civData.desc}`);

            // Notification effect
            const btn = document.getElementById('nav-book');
            if (btn) {
                btn.style.animation = 'pulse 1s infinite';
                setTimeout(() => btn.style.animation = '', 5000);
            }
        }
    }
}

function updateIndustrialList() {
    const list = document.getElementById('industrial-list');
    if (!list) return;

    const processes = INDUSTRIAL_PROCESSES;
    const unlocked = processes.filter(p => discovered.has(p.key));

    if (unlocked.length === 0) {
        list.innerHTML = '<span style="color: #999;">- 未発見 -</span>';
    } else {
        list.innerHTML = '';
        unlocked.forEach(p => {
            const item = document.createElement('div');
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.gap = '5px';
            item.innerHTML = `<span style="color: #2e7d32;">✅</span> <span>${p.name}</span>`;
            item.title = p.desc;
            list.appendChild(item);
        });
    }
}

function renderEncyclopedia() {
    const grid = document.getElementById('encyclopedia-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Civilization Info Display
    const civInfo = document.getElementById('enc-civ-info');
    if (civInfo) {
        // Click History
        civInfo.style.cursor = 'pointer';
        civInfo.onclick = showCivilizationList;
        civInfo.title = "タップして歴史を見る";

        const currentCiv = CIVILIZATION_LEVELS.find(c => c.level === currentCivilizationLevel) || CIVILIZATION_LEVELS[0];

        // Set civInfo content
        civInfo.innerHTML = `
            <div style="text-align:center;">
                <div class="civ-info-header">
                    <span>文明レベル ${currentCiv.level}</span>
                    <span style="margin-left:15px;">${currentCiv.year}</span>
                </div>
                <div class="civ-info-title">${currentCiv.name}</div>
                <div class="civ-info-desc">${currentCiv.desc}</div>
            </div>
        `;
    }

    // Update Encyclopedia Progress Bar
    const total = Object.keys(ELEMENTS).length;
    const found = Array.from(discovered).filter(id => ELEMENTS[id]).length;
    const percent = ((found / total) * 100).toFixed(2);
    const encPb = document.getElementById('enc-progress-bar');
    const encPt = document.getElementById('enc-progress-text');
    if (encPb) encPb.style.width = `${percent}%`;
    if (encPt) encPt.innerText = `${percent}%`;


    // Update Tabs
    const tabElements = document.getElementById('tab-elements');
    const tabIndustry = document.getElementById('tab-industry');

    // Reset styles logic
    if (tabElements && tabIndustry) {
        const activeStyle = `
            border-radius: 20px; 
            padding: 5px 30px; 
            background: #2e7d32; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
            font-weight: bold; 
            color: white;
            border: none;
            cursor: pointer;
        `;
        const inactiveStyle = `
            border-radius: 20px; 
            padding: 5px 30px; 
            background: transparent; 
            box-shadow: none; 
            font-weight: bold; 
            color: #666;
            border: none;
            cursor: pointer;
        `;

        if (currentBookTab === 'elements') {
            tabElements.className = 'action-btn'; // Use class for base styles
            tabElements.style.cssText = activeStyle;
            tabIndustry.className = 'text-btn';
            tabIndustry.style.cssText = inactiveStyle;

            grid.style.display = 'grid';
            renderElementsEncyclopedia(grid);
        } else if (currentBookTab === 'industry') {
            tabIndustry.className = 'action-btn';
            tabIndustry.style.cssText = activeStyle;
            tabElements.className = 'text-btn';
            tabElements.style.cssText = inactiveStyle;

            grid.style.display = 'grid';
            renderIndustrialEncyclopedia(grid);
        }
    } else {
        // Fallback if tabs missing
        renderElementsEncyclopedia(grid);
    }
}

function renderElementsEncyclopedia(grid) {
    grid.innerHTML = ''; // Clear grid
    let allIds = Object.keys(ELEMENTS);

    if (currentBookSearchQuery) {
        allIds = allIds.filter(id => {
            if (!discovered.has(id)) return false;
            const data = ELEMENTS[id];
            return data.name.toLowerCase().includes(currentBookSearchQuery);
        });
    }

    allIds.sort((a, b) => {
        const discA = discovered.has(a);
        const discB = discovered.has(b);

        // 1. Discovery Status (Discovered first)
        if (discA && !discB) return -1;
        if (!discA && discB) return 1;

        // 2. Selected Sort Mode
        if (currentSortMode === 'emoji') {
            const emojiA = ELEMENTS[a].emoji;
            const emojiB = ELEMENTS[b].emoji;
            return emojiA.localeCompare(emojiB, 'en', { sensitivity: 'base' });
        } else {
            // Default: ID
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    });

    // Update Sort Controls UI
    const sortIdBtn = document.getElementById('sort-id-btn');
    const sortEmojiBtn = document.getElementById('sort-emoji-btn');
    if (sortIdBtn && sortEmojiBtn) {
        if (currentSortMode === 'id') {
            sortIdBtn.style.color = '#333';
            sortIdBtn.style.fontWeight = 'bold';
            sortEmojiBtn.style.color = '#999';
            sortEmojiBtn.style.fontWeight = 'normal';
        } else {
            sortIdBtn.style.color = '#999';
            sortIdBtn.style.fontWeight = 'normal';
            sortEmojiBtn.style.color = '#333';
            sortEmojiBtn.style.fontWeight = 'bold';
        }
    }

    // Update stats
    updateStats();

    allIds.forEach(id => {
        const data = ELEMENTS[id];
        const isDiscovered = discovered.has(data.id);
        const card = document.createElement('div');
        card.className = `book-card ${isDiscovered ? 'unlocked' : 'locked'}`;

        if (isDiscovered) {
            card.innerHTML = `
                <div class="element-emoji">${data.emoji}</div>
                <div class="element-name">${data.name}</div>
                <div style="margin-top:5px; font-size:0.7rem; color:#888;">タップで詳細</div>
            `;
            card.style.cursor = 'pointer';
            card.onclick = () => showElementDetail(data.id);
        } else {
            card.innerHTML = `
                <div class="element-emoji">❓</div>
                <div class="element-name">???</div>
                <div class="element-desc">未発見</div>
            `;
            card.style.cursor = 'pointer';
            card.onclick = () => showLockedElementHint(id);
        }
        grid.appendChild(card);
    });
}

function showLockedElementHint(id) {
    let hint = "ヒント: まだ情報が足りないようだ...";

    // 1. Check Gatherable (Copying map for safety/simplicity)
    const locationMap = {
        'rubber_tree': '東南アジア（密林）',
        'sugarcane': '東南アジア（密林）',
        'spice': '東南アジア（香辛料の森）',
        'corn': 'アメリカ大陸（大農園）',
        'potato': '南米大陸（アンデス山脈）',
        'cacao': '南米大陸（アマゾン川）',
        'brine': '南米大陸（ウユニ塩湖）',
        'olive': 'スペイン（オリーブ畑）',
        'fluorite': 'スペイン（地中海沿岸）',
        'chromite': '南アフリカ（サバンナ）',
        'pentlandite': '南アフリカ（サバンナ）',
        'molybdenite': '南アフリカ（サバンナ）',
        'pyrochlore': '南アフリカ（サバンナ）',
        'rutile': '南アフリカ（サバンナ）',
        'bauxite': 'オーストラリア（赤い砂漠）',
        'cobalt_ore': 'オーストラリア（赤い砂漠）',
        'monazite': 'オーストラリア（赤い砂漠）',
        'lithium_ore': 'オーストラリア（赤い砂漠）',
        'uranium_ore': 'オーストラリア（赤い砂漠）',
        'seaweed': '海',
        'fish': '海',
        'mercury': '洞窟',
        'copper_ore': '南米（アンデス山脈）',
        'titanium_sponge': '月面'
    };

    // Simple list of basic gatherables (Japan/Field)
    const basicGatherables = ['water', 'sun', 'earth', 'air', 'wood', 'shell', 'iron_ore', 'sand', 'grape', 'plant', 'stone', 'clay', 'fire'];

    if (locationMap[id]) {
        hint = `ヒント: 【${locationMap[id]}】周辺を探してみよう。`;
    } else if (basicGatherables.includes(id)) {
        hint = "ヒント: 身近な【採取フィールド】をくまなく探してみよう。";
    } else {
        // 2. Check Recipe
        // Find ANY recipe producing this item
        let foundRecipe = null;
        for (const [inputs, result] of Object.entries(RECIPES)) {
            const results = Array.isArray(result) ? result : [result];
            if (results.includes(id)) {
                foundRecipe = inputs.split('+');
                break;
            }
        }

        if (foundRecipe) {
            // Check how many ingredients are discovered
            const discoveredCount = foundRecipe.filter(i => discovered.has(i)).length;
            if (discoveredCount === foundRecipe.length) {
                hint = "ヒント: 既に持っている素材を【合成】すれば作れそうだ...！";
            } else if (discoveredCount > 0) {
                hint = "ヒント: 手持ちの素材と、まだ見ぬ素材を組み合わせる必要がありそうだ。";
            } else {
                hint = "ヒント: まだ見たことのない素材が必要なようだ。まずは探索を進めよう。";
            }
        } else {
            // 3. Check Special Facilities (Simple check)
            if (id === 'iron' || id === 'copper' || id === 'gold') {
                hint = "ヒント: 【製錬所】で鉱石を熱する必要があるかもしれない。";
            } else if (['fresh_water', 'salt', 'alcohol'].includes(id)) {
                hint = "ヒント: 【蒸留所】で液体を精製してみよう。";
            } else if (['charcoal', 'coke'].includes(id)) {
                hint = "ヒント: 【乾留所】で燃えるものを蒸し焼きにしてみよう。";
            } else {
                hint = "ヒント: ある特定の条件や施設でのみ入手できるようだ。文明を進めよう。";
            }
        }
    }

    ui.modalBody.innerHTML = `
        <div class="element-emoji" style="font-size:4rem; margin-bottom:10px;">🔒</div>
        <h2>未発見の要素</h2>
        <div style="text-align:center; background:rgba(0,0,0,0.05); padding:20px; border-radius:10px; margin-top:15px; font-weight:bold; color:#555;">
            ${hint}
        </div>
    `;
    ui.modal.style.display = 'flex';
}


function renderIndustrialEncyclopedia(grid) {
    grid.innerHTML = ''; // Clear grid
    INDUSTRIAL_PROCESSES.forEach(proc => {
        const isUnlocked = discovered.has(proc.key);

        // Filter
        if (currentBookSearchQuery) {
            if (!isUnlocked) return; // Hide locked from search
            if (!proc.name.toLowerCase().includes(currentBookSearchQuery) &&
                !proc.desc.toLowerCase().includes(currentBookSearchQuery)) {
                return;
            }
        }

        const card = document.createElement('div');
        card.className = `book-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.style.height = 'auto';
        card.style.minHeight = '140px';

        if (isUnlocked) {
            card.innerHTML = `
                <div class="element-emoji">🏭</div>
                <div class="element-name">${proc.name}</div>
                <div style="margin-top:5px; font-size:0.7rem; color:#888;">タップで詳細</div>
            `;
            card.style.cursor = 'pointer';
            card.onclick = () => {
                showIndustrialDetail(proc.id);
            };
        } else {
            card.innerHTML = `
                <div class="element-emoji">🔒</div>
                <div class="element-name">未開放</div>
            `;
        }
        grid.appendChild(card);
    });
}

function showIndustrialDetail(procId) {
    const proc = INDUSTRIAL_PROCESSES.find(p => p.id === procId);
    if (!proc) return;

    let relatedElement = ELEMENTS[proc.key];
    if (proc.id === 'contact') {
        relatedElement = ELEMENTS['sulfuric_acid'];
    }
    const emoji = '🏭';

    let infoHtml = `<h3>技術概要</h3><p>${proc.desc}</p>`;

    // Reward message for Ostwald/Contact process
    if (proc.id === 'ostwald') {
        infoHtml += `<div style="margin-top:10px; padding:10px; background:#e8f5e9; border:1px solid #2e7d32; border-radius:8px; font-size:0.85rem; color:#1b5e20;">
                        <strong>【工業化特典】</strong><br>
                        硝酸が工業的に大量生産されるようになりました。合成に使用しても消費されません！
                     </div>`;
    } else if (proc.id === 'contact') {
        infoHtml += `<div style="margin-top:10px; padding:10px; background:#e8f5e9; border:1px solid #2e7d32; border-radius:8px; font-size:0.85rem; color:#1b5e20;">
                        <strong>【工業化特典】</strong><br>
                        硫酸が大量生産されるようになりました。合成に使用しても消費されません！
                     </div>`;
    } else if (proc.id === 'hydroelectric') {
        infoHtml += `<div style="margin-top:10px; padding:10px; background:#e8f5e9; border:1px solid #2e7d32; border-radius:8px; font-size:0.85rem; color:#1b5e20;">
                        <strong>【工業化特典】</strong><br>
                        安定した電力供給が確保されました。電気が合成に使用しても消費されません！
                     </div>`;
    } else if (proc.id === 'haber_bosch') {
        infoHtml += `<div style="margin-top:10px; padding:10px; background:#e8f5e9; border:1px solid #2e7d32; border-radius:8px; font-size:0.85rem; color:#1b5e20;">
                        <strong>【工業化特典】</strong><br>
                        空中窒素の固定に成功！アンモニアが工業的に大量生産されるようになりました。合成に使用しても消費されません！
                     </div>`;
    } else if (proc.id === 'sabatier') {
        infoHtml += `<div style="margin-top:10px; padding:10px; background:#e8f5e9; border:1px solid #2e7d32; border-radius:8px; font-size:0.85rem; color:#1b5e20;">
                        <strong>【工業化特典】</strong><br>
                        サバティエ反応の実装に成功！メタンが燃料として大量生産されるようになりました。合成に使用しても消費されません！
                     </div>`;
    }

    if (relatedElement) {
        infoHtml += `<h3 style="margin-top:15px;">成果物</h3>
                     <div style="display:flex; align-items:center; gap:10px; background:white; padding:10px; border-radius:8px; margin-top:5px;">
                        <span style="font-size:2rem;">${relatedElement.emoji}</span>
                        <span>${relatedElement.name}</span>
                     </div>`;
    }

    ui.modalBody.innerHTML = `
        <div class="element-emoji" style="font-size:4rem; margin-bottom:10px;">${emoji}</div>
        <h2>${proc.name}</h2>
        <div style="text-align:left; background:rgba(0,0,0,0.05); padding:15px; border-radius:10px; margin-top:10px;">
            ${infoHtml}
        </div>
    `;
    ui.modal.style.display = 'flex';
}

function showElementDetail(id) {
    const data = ELEMENTS[id];
    let recipeHtml = '';

    // 1. Gatherable?
    const gatherables = [
        'water', 'sun', 'earth', 'air', 'wood', 'shell', 'iron_ore', 'sand', 'grape', 'plant',
        'stone', 'clay', 'graphite', 'manganese_dioxide', 'copper_sulfate', 'sulfur',
        'lacquer', 'gold_dust', 'iron_sand', 'platinum', 'cinnabar', 'cassiterite', 'coal', 'bamboo',
        'lightning', 'fresh_water', 'urine', 'scheelite', 'magnetite', 'galena', 'sphalerite', 'calcite',
        'diatomaceous_earth', 'olive', 'crude_oil', 'barite',
        'rubber_tree', 'sugarcane', 'spice', 'corn', 'potato', 'cacao', 'fluorite',
        'seaweed', 'fish', 'mercury', 'brine', 'copper_ore',
        'chromite', 'pentlandite', 'molybdenite', 'pyrochlore', 'rutile', 'palladium', 'rhodium', 'platinum', 'iridium',
        'bauxite', 'cobalt_ore', 'monazite', 'lithium_ore', 'uranium_ore',
        'titanium_sponge', 'flower', 'animal'
    ];

    const locationMap = {
        'rubber_tree': '東南アジア（密林）',
        'sugarcane': '東南アジア（密林）',
        'spice': '東南アジア（香辛料の森）',
        'corn': 'アメリカ大陸（大農園）',
        'potato': '南米大陸（アンデス山脈）',
        'cacao': '南米大陸（アマゾン川）',
        'brine': '南米大陸（ウユニ塩湖）',
        'olive': 'スペイン（オリーブ畑）',
        'fluorite': 'スペイン（地中海沿岸）',
        'chromite': '南アフリカ（サバンナ）',
        'pentlandite': '南アフリカ（サバンナ）',
        'molybdenite': '南アフリカ（サバンナ）',
        'pyrochlore': '南アフリカ（サバンナ）',
        'rutile': '南アフリカ（サバンナ）',
        'palladium': '南アフリカ（サバンナ）',
        'rhodium': '南アフリカ（サバンナ）',
        'platinum': '南アフリカ（サバンナ）・フィールド（川）・月面',
        'iridium': '月面（クレーター）・フィールド（洞窟）',
        'bauxite': 'オーストラリア（赤い砂漠）',
        'cobalt_ore': 'オーストラリア（赤い砂漠）',
        'monazite': 'オーストラリア（赤い砂漠）',
        'lithium_ore': 'オーストラリア（赤い砂漠）',
        'uranium_ore': 'オーストラリア（赤い砂漠）',
        'seaweed': 'フィールド（海）',
        'fish': 'フィールド（海）',
        'mercury': 'フィールド（洞窟）',
        'copper_ore': '南米（アンデス山脈）',
        'titanium_sponge': '月面（クレーター）',
        'flower': 'フィールド（森）',
        'flower': 'フィールド（森）',
        'animal': 'フィールド（森）'
    };

    if (gatherables.includes(id)) {
        let loc = locationMap[id] || 'フィールド';
        recipeHtml += `<p>採取可能：${loc}で探そう</p>`;
    }

    // 2. Smeltery?
    if (['iron', 'lead', 'manganese', 'tin', 'mercury', 'bismuth'].includes(id)) {
        recipeHtml += `<p>入手方法：製錬所で鉱石を高温で熱して取り出す</p>`;
    }
    // 3. Carbonization Facility?
    else if (['charcoal', 'wood_vinegar', 'coke', 'coal_tar', 'coal_gas', 'methanol', 'acetone', 'calcium_carbonate'].includes(id)) {
        if (['methanol', 'acetone', 'calcium_carbonate'].includes(id) && !gatherables.includes(id)) {
            recipeHtml += `<p>入手方法：乾留所で「酢酸カルシウム」を乾留して抽出する（または合成）</p>`;
        } else {
            recipeHtml += `<p>入手方法：乾留所で木材や石炭を蒸し焼きにする</p>`;
        }
    }
    // 4. Distillery?
    else if (['fresh_water', 'salt', 'alcohol', 'light_oil', 'middle_oil', 'heavy_oil', 'anthracene_oil', 'pitch',
        'crude_wood_alcohol', 'phenol', 'industrial_naphthalene', 'glacial_acetic_acid', 'sodium_sulfate'].includes(id)) {
        if (id === 'fresh_water' || id === 'salt') {
            recipeHtml += `<p>入手方法：蒸留所で「海水」を加熱・冷却して抽出する</p>`;
        } else if (id === 'alcohol') {
            recipeHtml += `<p>入手方法：蒸留所で「ワイン」を加熱・冷却して抽出する</p>`;
        } else if (id === 'crude_wood_alcohol') {
            recipeHtml += `<p>入手方法：蒸留所で「木酢液」を蒸留して抽出する</p>`;
        } else if (id === 'phenol') {
            recipeHtml += `<p>入手方法：蒸留所で「粗フェノール」を精製する</p>`;
        } else if (id === 'industrial_naphthalene') {
            recipeHtml += `<p>入手方法：蒸留所で「ナフタレン」を昇華精製する</p>`;
        } else if (id === 'glacial_acetic_acid' || id === 'sodium_sulfate') {
            recipeHtml += `<p>入手方法：蒸留所で「無水酢酸ナトリウム」+「硫酸」を蒸留</p>`;
        } else {
            recipeHtml += `<p>入手方法：蒸留所で「コールタール」を分留して抽出する</p>`;
        }
    }
    // 5. Oil Refinery
    else if (['lp_gas', 'gasoline', 'naphtha', 'kerosene', 'asphalt'].includes(id)) {
        recipeHtml += `<p>入手方法：製油所で「原油」を精製する</p>`;
    }
    // 5. Extraction Facility?
    else if (['benzene', 'phenoxide', 'crude_naphthalene', 'naphthalene'].includes(id)) {
        recipeHtml += `<p>入手方法：抽出所で化学処理を行って抽出する</p>`;
    }
    // 7. Industrial Processes?
    const indProc = INDUSTRIAL_PROCESSES.find(p => p.key === id);
    if (indProc && discovered.has(indProc.id)) {
        recipeHtml += `<p>入手方法：工業的製法「${indProc.name}」により製造される（${indProc.desc}）</p>`;
    }

    // 8. Dynamic Recipe (Battery)
    else if (id === 'battery') {
        recipeHtml += `<h3>合成レシピ</h3><div style="margin:5px 0;">導電性物質(金属/炭) x2 + 食塩水 (※異なる2種類)</div>`;
    }

    // 6. Crafted? (Check Recipes)
    const recipesFound = [];
    for (const [inputs, result] of Object.entries(RECIPES)) {
        const results = Array.isArray(result) ? result : [result];
        if (results.includes(id)) {
            const inputsList = inputs.split('+');

            // Hide recipe if ingredients are not discovered
            if (!inputsList.every(inId => discovered.has(inId))) continue;

            const names = inputsList.map(inId => {
                const el = ELEMENTS[inId];
                if (el && discovered.has(inId)) {
                    return `<span style="cursor:pointer; text-decoration:underline;" onclick="showElementDetail('${inId}')">${el.emoji}${el.name}</span>`;
                }
                return el ? el.emoji + el.name : inId;
            });
            recipesFound.push(names.join(' + '));
        }
    }

    if (recipesFound.length > 0) {
        recipeHtml += `<h3>合成レシピ</h3>`;
        recipesFound.forEach(r => {
            recipeHtml += `<div style="margin:5px 0;">${r}</div>`;
        });
    }

    if (recipeHtml === '') {
        recipeHtml = `<p>${getText('howToMake')}${getText('unknown')}</p>`;
    }

    // === Usage Analysis (Reverse Lookup) ===
    let usagesHtml = '';
    const usages = [];

    // Check Crafting Recipes including multi-output
    Object.keys(RECIPES).forEach(key => {
        const ingredients = key.split('+');
        if (ingredients.includes(id)) {
            const results = Array.isArray(RECIPES[key]) ? RECIPES[key] : [RECIPES[key]];
            results.forEach(resId => {
                if (discovered.has(resId)) {
                    usages.push(`<span class="usage-item" style="display:inline-flex; align-items:center; margin:3px; padding:3px 8px; background:rgba(255,255,255,0.6); border:1px solid #ddd; border-radius:15px; font-size:0.85rem; cursor:pointer;" onclick="showElementDetail('${resId}')">${ELEMENTS[resId].emoji} ${getItemName(resId)}</span>`);
                } else {
                    usages.push(`<span class="usage-item" style="display:inline-flex; align-items:center; margin:3px; padding:3px 8px; background:rgba(0,0,0,0.05); border-radius:15px; font-size:0.85rem; color:#888;">❓ ???</span>`);
                }
            });
        }
    });

    if (usages.length > 0) {
        usagesHtml = `<div style="margin-top:15px; padding-top:10px; border-top:1px dashed #ccc;"><strong>${getText('uses')}</strong><div style="margin-top:5px; display:flex; flex-wrap:wrap; gap:2px;">${usages.join('')}</div></div>`;
    }

    ui.modalBody.innerHTML = `
        <div class="element-emoji" style="font-size:4rem; margin-bottom:10px; overflow: visible; width: auto;">${data.emoji}</div>
        <h2>${getItemName(id)}</h2>
        <p style="margin-bottom:20px;">${getItemDesc(id)}</p>
        <div style="text-align:left; background:rgba(0,0,0,0.05); padding:15px; border-radius:10px;">
            ${recipeHtml}
            ${usagesHtml}
        </div>
    `;
    ui.modal.style.display = 'flex';
}

function showCivilizationList() {
    let listHtml = '<div style="display:flex; flex-direction:column; gap:10px; text-align:left;">';

    CIVILIZATION_LEVELS.forEach(civ => {
        const isReached = civ.level <= currentCivilizationLevel;
        // Current Level Highlight
        const isCurrent = civ.level === currentCivilizationLevel;

        let bgStyle = 'background: #f5f5f5; border: 1px solid #ddd; color: #888;'; // Locked
        if (isReached) bgStyle = 'background: white; border: 1px solid #81c784; color: #2e7d32;';
        if (isCurrent) bgStyle = 'background: #fff3e0; border: 2px solid #ff9800; color: #e65100; box-shadow: 0 2px 8px rgba(255,152,0,0.2);';

        const name = isReached ? civ.name : '???';
        const desc = isReached ? civ.desc : '条件未達成';
        const year = isReached ? civ.year : '???';
        const statusIcon = isCurrent ? '🚩' : (isReached ? '✅' : '🔒');

        listHtml += `
            <div style="padding:12px; border-radius:10px; ${bgStyle} display:flex; gap:10px; align-items:center;">
                <div style="font-size:1.5rem;">${statusIcon}</div>
                <div style="flex:1;">
                    <div style="font-weight:bold; font-size:0.95rem; display:flex; justify-content:space-between;">
                        <span>Lv.${civ.level} ${name}</span>
                        <span style="font-size:0.8rem; opacity:0.8;">${year}</span>
                    </div>
                    <div style="font-size:0.85rem; margin-top:4px;">${desc}</div>
                </div>
            </div>
        `;
    });
    listHtml += '</div>';

    ui.modalBody.innerHTML = `
        <div class="element-emoji" style="font-size:3rem; margin-bottom:10px;">📜</div>
        <h2>文明の歴史</h2>
        <p style="margin-bottom:15px; font-size:0.9rem; color:#666;">これまでの人類の進化の記録</p>
        <div style="max-height:60vh; overflow-y:auto; padding:5px;">
            ${listHtml}
        </div>
    `;
    ui.modal.style.display = 'flex';
}


function toggleLiteMode(forceState) {
    if (typeof forceState === 'boolean') {
        isLiteMode = forceState;
    } else {
        isLiteMode = !isLiteMode;
    }

    if (isLiteMode) {
        document.body.classList.add('lite-mode');
        if (ui.toggleLiteBtn) {
            ui.toggleLiteBtn.innerHTML = '⚡ Lite';
            ui.toggleLiteBtn.style.color = '#4caf50';
            ui.toggleLiteBtn.style.fontWeight = 'bold';
        }
        localStorage.setItem('nature_science_lite_mode', 'true');
    } else {
        document.body.classList.remove('lite-mode');
        if (ui.toggleLiteBtn) {
            ui.toggleLiteBtn.innerHTML = '✨ Lite';
            ui.toggleLiteBtn.style.color = '#777';
            ui.toggleLiteBtn.style.fontWeight = 'normal';
        }
        localStorage.setItem('nature_science_lite_mode', 'false');
    }
}

// === Language System ===
const TRANSLATIONS = {
    ja: {
        field: '🏞️ 採取フィールド',
        lab: '⚗️ 合成ラボ',
        book: '📖 図鑑',
        deleteSave: '🗑️ データを消す',
        export: '📤 保存',
        import: '📥 読込',
        searchPlaceholder: '🔍 名前や説明で検索...',
        inventorySearchPlaceholder: '🔍 検索...',
        sort: '🖐️ 並べ替え',
        inventoryHint: 'クリックで装置にセット',
        machineTitle1: '合成実験装置',
        machineTitle2: '製錬所',
        machineTitle3: '蒸留所',
        machineTitle4: '乾留所',
        machineTitle5: '抽出所',
        machineTitle6: '製油所',
        craftBtn: '合成する！',
        clearBtn: 'クリア',
        unknown: '不明',
        howToMake: '入手方法：',
        uses: '🛠️ 作れるもの:',
        civHistory: '文明の歴史',
        civDesc: 'これまでの人類の進化の記録',
        craftSuccess: '合成成功！',
        discovery: '✨ 新発見！',
        refined: '製錬完了！',
        distilled: '蒸留完了！',
        extracted: '抽出完了！'
    },

};

// 多言語対応を削除し、日本語固定に戻す
function getText(key) {
    return TRANSLATIONS.ja[key] || key;
}

function getItemName(id) {
    return ELEMENTS[id].name;
}

function getItemDesc(id) {
    return ELEMENTS[id].desc;
}

function updateLanguageUI() {
    // HTMLの記述を優先するため、JSによる上書きを無効化
}




// === Dark Mode Logic ===
let isDarkMode = false;

function toggleDarkMode(forceState) {
    if (typeof forceState === 'boolean') {
        isDarkMode = forceState;
    } else {
        isDarkMode = !isDarkMode;
    }

    const btn = document.getElementById('btn-toggle-dark');

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (btn) {
            btn.innerText = '🌙 Dark';
            btn.style.color = '#AB47BC';
            btn.style.fontWeight = 'bold';
        }
        localStorage.setItem('nature_science_dark_mode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        if (btn) {
            btn.innerText = '🌙 Dark';
            btn.style.color = '#777';
            btn.style.fontWeight = 'normal';
        }
        localStorage.setItem('nature_science_dark_mode', 'false');
    }
}

// Init Dark Mode
const savedDarkMode = localStorage.getItem('nature_science_dark_mode');
if (savedDarkMode === 'true') {
    toggleDarkMode(true);
}
const btnToggleDark = document.getElementById('btn-toggle-dark');
if (btnToggleDark) {
    btnToggleDark.addEventListener('click', () => toggleDarkMode());
}

init();
