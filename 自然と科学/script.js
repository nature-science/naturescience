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
    'bamboo': { id: 'bamboo', name: '竹', emoji: '🎋', desc: '真っ直ぐ空へ伸びる丈夫な植物。', category: 'natural' },
    'clay': { id: 'clay', name: '粘土', emoji: '🧱', desc: '水を含んでねっとりした土。こねて形を作れそう。', category: 'natural' },
    'admixture': { id: 'admixture', name: '混和材', emoji: '🥣', desc: '砂と粘土を混ぜたもの。建築資材の基礎。', category: 'chemical' },
    'lime_mortar': { id: 'lime_mortar', name: '石灰モルタル', emoji: '🌫️', desc: '砂と石灰（炭酸Ca）に熱を加えて反応させたもの。非常に硬くなる。', category: 'chemical' },
    'fiber': { id: 'fiber', name: '繊維', emoji: '🧵', desc: '植物から取り出した丈夫な糸状のもの。', category: 'chemical' },
    'string': { id: 'string', name: '紐', emoji: '🧶', desc: '繊維をより合わせて作った紐。', category: 'chemical' },
    'bow': { id: 'bow', name: '弓', emoji: '🏹', desc: '木と紐で作った道具。摩擦熱を起こすのにも使える。', category: 'tool' },

    // Crafted
    'fire': { id: 'fire', name: '火', emoji: '🔥', desc: '熱く燃え盛る炎。取扱注意！', category: 'chemical' },
    'wine': { id: 'wine', name: 'ワイン', emoji: '🍷', desc: 'ブドウを発酵させた芳醇な液体。', category: 'chemical' },
    'vinegar': { id: 'vinegar', name: '酢酸', emoji: '🍶', desc: '刺激臭のある酸性の液体。ワインが酸化したもの。', category: 'chemical' },
    'earthenware': { id: 'earthenware', name: '土器', emoji: '🏺', desc: '混和材を焼き固めて作った器。', category: 'chemical' },

    // Metals (Refined)
    'iron': { id: 'iron', name: '鉄', emoji: '⛓️', desc: '頑丈な金属。', category: 'chemical' },

    // Level 1 Ingredients
    'steam': { id: 'steam', name: '水蒸気', emoji: '🌫️', desc: '熱せられた水。', category: 'chemical' },
    'hot_water': { id: 'hot_water', name: 'お湯', emoji: '♨️', desc: '温められた水。様々な用途に使える。', category: 'chemical' },
    'salt': { id: 'salt', name: '塩化ナトリウム', emoji: '🧂', desc: '海水を蒸発させて残った結晶。食塩。', category: 'chemical' },
    'energy': { id: 'energy', name: 'エネルギー', emoji: '⚡', desc: '自然の力。', category: 'natural' },
    'stone': { id: 'stone', name: '石', emoji: '🪨', desc: '自然の中で見つかる硬い塊。', category: 'natural' },
    'stone_tool': { id: 'stone_tool', name: '石器', emoji: '🪓', desc: '石を加工して作った原始的な道具。', category: 'tool' },
    'calcium_carbonate': { id: 'calcium_carbonate', name: '炭酸カルシウム', emoji: '🦴', desc: '貝殻を砕いて作った白い粉末。', category: 'chemical' },
    'alcohol': { id: 'alcohol', name: 'エタノール', emoji: '🧪', desc: '純度の高いアルコール。よく燃える。', category: 'chemical' },
    'plant_ash': { id: 'plant_ash', name: '植物の灰', emoji: '🌑', desc: '植物を燃やしてできた灰。', category: 'chemical' },
    'frit': { id: 'frit', name: 'フリット', emoji: '💎', desc: '砂と植物の灰を混ぜて熱した、ガラスの原料。', category: 'chemical' },
    'glass': { id: 'glass', name: 'ガラス', emoji: '🍺', desc: 'フリットを高温で溶かして作った透明な物質。', category: 'chemical' },
    'charcoal': { id: 'charcoal', name: '木炭', emoji: '⬛', desc: '木材を乾留して作った高純度の炭。', category: 'chemical' },
    'wood_vinegar': { id: 'wood_vinegar', name: '木酢液', emoji: '🏺', desc: '木材の乾留時に出る液体成分。', category: 'chemical' },
    'salt_water': { id: 'salt_water', name: '食塩水', emoji: '🧪', desc: '水に塩を溶かしたもの。', category: 'chemical' },
    'battery': { id: 'battery', name: '電池', emoji: '🔋', desc: '食塩水に異なる2種類の電極を浸すことで、化学エネルギーを電気エネルギーに変換する装置。', category: 'chemical' },
    'electricity': { id: 'electricity', name: '電気', emoji: '🔌', desc: '電池から取り出された動力源。', category: 'chemical' },
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
    'circle': { id: 'circle', name: '円', emoji: '⭕', desc: 'コンパスで描かれた完璧な曲線。', category: 'chemical' },
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
    'copper': { id: 'copper', name: '銅', emoji: '🥉', desc: '美しい光沢を持つ赤みがかった金属。電気をよく通し、加工しやすい。', category: 'chemical' },
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
    'lightning': { id: 'lightning', name: '雷', emoji: '⚡', desc: '雲から放たれる巨大な電気エネルギー。', category: 'natural' },
    'lacquer': { id: 'lacquer', name: '漆', emoji: '🏺', desc: '漆の木から採れる天然の樹脂。塗料や接着剤として使われる。', category: 'natural' },
    'enameled_wire': { id: 'enameled_wire', name: 'エナメル線', emoji: '🧵', desc: '銅線に漆を塗って絶縁したもの。コイルの材料になる。', category: 'chemical' },
    'magnet': { id: 'magnet', name: '磁石', emoji: '🧲', desc: '鉄にエナメル線を巻き、雷の強力な電気を流して作った永久磁石。', category: 'tool' },
    'copper_disk': { id: 'copper_disk', name: '銅の円盤', emoji: '💿', desc: '銅を車輪の形に加工した円盤。発電機の部品になる。', category: 'chemical' },
    'generator': { id: 'generator', name: '発電機', emoji: '⚙️', desc: '磁石と回転する銅の円盤を組み合わせ、運動エネルギーを電気に変える装置。', category: 'tool' },
    'coil': { id: 'coil', name: 'コイル', emoji: '🌀', desc: '鉄芯にエナメル線を巻き付けたもの。電磁誘導や電磁石の基礎パーツ。', category: 'tool' },
    'electromagnet': { id: 'electromagnet', name: '電磁石', emoji: '🧲', desc: 'コイルに電気を流すことで磁力を持たせた装置。電気を切ると磁力が消える。', category: 'tool' },
    'manganese_monoxide': { id: 'manganese_monoxide', name: '一酸化マンガン', emoji: '🧪', desc: '軟マンガン鉱を炭素で還元して得られる緑色の粉末。', category: 'chemical' },
    'manganese': { id: 'manganese', name: 'マンガン', emoji: '⛓️', desc: '硬くて脆い銀白色の金属。鉄の脱硫や合金の添加剤として重要。', category: 'chemical' },
    'calcium_chloride': { id: 'calcium_chloride', name: '塩化カルシウム', emoji: '🧪', desc: '炭酸カルシウムと塩酸の反応で得られる塩。除湿剤や凍結防止剤に使われる。', category: 'chemical' },
    'gold_dust': { id: 'gold_dust', name: '砂金', emoji: '✨', desc: '川底に溜まっていた重い金の粒。集めれば価値のある金属になる。', category: 'natural' },
    'gold': { id: 'gold', name: '金', emoji: '🥇', desc: '永遠に輝く貴金属の王。腐食せず、加工しやすい。', category: 'chemical' },
    'iron_sand': { id: 'iron_sand', name: '砂鉄', emoji: '✨', desc: '砂浜や川底に含まれる磁性を持つ鉄の粉末。たたら製鉄の原料になる。', category: 'natural' },
    'platinum': { id: 'platinum', name: 'プラチナ', emoji: '💍', desc: '川底で稀に見つかる非常に希少で安定した貴金属。白金。', category: 'natural' },
    'cinnabar': { id: 'cinnabar', name: '辰砂', emoji: '🌑', desc: '水銀を含む赤い鉱石。加熱すると水銀を取り出せる。', category: 'natural' },
    'brine': { id: 'brine', name: '塩湖かん水', emoji: '🧂', desc: '塩分濃度が非常に高い水。リチウムなどの資源を含む。', category: 'nature' },
    'cassiterite': { id: 'cassiterite', name: '錫石', emoji: '🌑', desc: '錫を含む鉱石。製錬すると錫を取り出せる。', category: 'natural' },
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
    'triangle': { id: 'triangle', name: '三角形', emoji: '📐', desc: '3本の棒を組み合わせた基本の図形。', category: 'chemical' },
    'quadrilateral': { id: 'quadrilateral', name: '四角形', emoji: '⬛', desc: '三角形を2つ組み合わせて作った図形。', category: 'chemical' },
    'plank': { id: 'plank', name: '木の板', emoji: '🪵', desc: '四角形の枠組みに木材を張った板。', category: 'tool' },
    'compass': { id: 'compass', name: '方位磁針', emoji: '🧭', desc: '針と磁石を組み合わせた、方角を知るための道具基準。', category: 'tool' },
    'ketene': { id: 'ketene', name: 'ケテン', emoji: '💨', desc: '酢酸を熱分解して得られる反応性の高い気体。', category: 'chemical' },
    'acetic_anhydride': { id: 'acetic_anhydride', name: '無水酢酸', emoji: '🧪', desc: 'ケテンと酢酸を反応させて得られる化合物。', category: 'chemical' },
    'gold_plating': { id: 'gold_plating', name: '金メッキ', emoji: '✨', desc: '水銀と砂金を使ったアマルガム法によるメッキ。', category: 'tool' },
    'nital': { id: 'nital', name: 'ナイタール液', emoji: '🧪', desc: '硝酸とアルコールの混合液。金属の腐食検査に使われる。', category: 'chemical' },
    'sphere': { id: 'sphere', name: '球', emoji: '🔮', desc: '円を立体的にした完璧な形。', category: 'chemical' },
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
    'hydroelectric_power': { id: 'hydroelectric_power', name: '水力発電', emoji: '⚡', desc: '水車、歯車、発電機を組み合わせ、水の流れから絶え間なく電気を生み出す仕組み。', category: 'tool' },
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
    'fireworks': { id: 'fireworks', name: '花火', 'emoji': '🎆', desc: '火薬と金属粉を混ぜて夜空を彩る美しい爆発。', category: 'tool' },
    'mirror': { id: 'mirror', name: '鏡', emoji: '🪞', desc: 'ガラスに銀メッキを施して作られた、姿を映す道具。銀鏡反応の応用。', category: 'tool' },
    'prism': { id: 'prism', name: 'プリズム', emoji: '🌈', desc: '光を屈折・分散させる透明な三角柱。虹を作り出せる。', category: 'tool' },
    'calcite': { id: 'calcite', name: '方解石', emoji: '⬜', desc: '透明度の高い炭酸カルシウムの結晶。複屈折という不思議な性質を持つ。', category: 'natural' },
    'polarizing_prism': { id: 'polarizing_prism', name: '偏光プリズム', emoji: '⬛', desc: '方解石を加工して作った、特定の方向の光だけを通すプリズム。', category: 'tool' },
    'crude_wood_alcohol': { id: 'crude_wood_alcohol', name: '粗木精', emoji: '🧪', desc: '木酢液を蒸留して得られる、メタノールを含む液体。', category: 'chemical' },
    'methanol': { id: 'methanol', name: 'メタノール', emoji: '🧪', desc: '酢酸カルシウムを乾留して得られる揮発性の液体。毒性が強い。', category: 'chemical' },
    'copper_oxide': { id: 'copper_oxide', name: '酸化銅', emoji: '🌑', desc: '銅を加熱して酸化させた黒い粉末。', category: 'chemical' },
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
    'rudder': { id: 'rudder', name: '舵', emoji: '⚓', desc: '船の進行方向を変えるための板。', category: 'tool' },
    'marine_engine': { id: 'marine_engine', name: '船舶用機関', emoji: '⚙️', desc: 'スクリューと舵を組み込んだ、船を動かすための動力システム。', category: 'tool' },
    'steamship': { id: 'steamship', name: '機帆船', emoji: '🚢', desc: '蒸気機関と帆の両方で進む船。近代航海の幕開け。', category: 'tool' },
    'rubber_tree': { id: 'rubber_tree', name: 'ゴムノキ', emoji: '🌳', desc: '樹液からゴムが採れる熱帯の木。', category: 'natural' },
    'spice': { id: 'spice', name: '香辛料', emoji: '🌶️', desc: '東南アジア原産のスパイス。料理に風味を加える。', category: 'natural' },
    'corn': { id: 'corn', name: 'トウモロコシ', emoji: '🌽', desc: 'アメリカ大陸原産の穀物。甘くて栄養豊富。', category: 'natural' },
    'potato': { id: 'potato', name: 'ジャガイモ', emoji: '🥔', desc: '南米アンデス原産の芋。荒地でも育つ。', category: 'natural' },
    'cacao': { id: 'cacao', name: 'カカオ', emoji: '🍫', desc: '南米アマゾン原産の豆。チョコレートの原料。', category: 'natural' },
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
    'penicillin': { id: 'penicillin', name: 'ペニシリン', emoji: '💊', desc: '青カビから発見された世界初の抗生物質。多くの命を救った。', category: 'chemical' },

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

    'nickel': { id: 'nickel', name: 'ニッケル', emoji: '⛓️', desc: '熱や腐食に強い銀白色の金属。', category: 'chemical' },
    'chromium': { id: 'chromium', name: 'クロム', emoji: '🛡️', desc: '非常に硬く、錆びにくい金属。メッキや合金に使われる。', category: 'chemical' },
    'molybdenum': { id: 'molybdenum', name: 'モリブデン', emoji: '⛓️', desc: '融点が非常に高い金属。', category: 'chemical' },

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
    'cobalt_ore': { id: 'cobalt_ore', name: 'コバルト鉱石', emoji: '🔵', desc: '青い光沢を持つ価値の高い鉱石。電池や合金に使われる。', category: 'natural' },
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
    'lithium_ore': { id: 'lithium_ore', name: 'リチウム鉱石', emoji: '🪨', desc: 'リチウムを含む鉱石（スポジュメン）。電池の原料になる。', category: 'natural' },
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
    'internet': { id: 'internet', name: 'インターネット', emoji: '🌐', desc: '世界中のコンピュータがつながった巨大なネットワーク。情報の海。', category: 'tool' },
    'ai': { id: 'ai', name: '人工知能', emoji: '🧠', desc: '学習し、考えるコンピュータプログラム。人類のパートナー。', category: 'tool' },

    // Next-Gen Energy
    'solar_panel': { id: 'solar_panel', name: 'ソーラーパネル', emoji: '☀️', desc: 'シリコンを使って太陽の光を直接電気に変える板。', category: 'part' },
    'solar_power_plant': { id: 'solar_power_plant', name: 'メガソーラー', emoji: '🔋', desc: '大量のソーラーパネルを並べた発電所。クリーンエネルギー。', category: 'tool' },
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
    'radio': { id: 'radio', name: 'ラジオ', emoji: '📻', desc: '電波を受信して音声を流す装置。情報の架け橋。', category: 'tool' },
    'telephone': { id: 'telephone', name: '電話機', emoji: '☎️', desc: '遠く離れた人と声で会話できる発明。', category: 'tool' },
    'crt': { id: 'crt', name: 'ブラウン管', emoji: '📺', desc: '電子ビームで画面を光らせる装置。テレビの心臓部。', category: 'part' },
    'television': { id: 'television', name: 'テレビ', emoji: '📺', desc: '動く映像と音声を映し出す魔法の箱。', category: 'tool' },

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
    { id: 'haber_bosch', name: 'ハーバー・ボッシュ法', key: 'high_pressure_reactor', req: 'iron_catalyst', desc: '空気中の窒素を固定し、アンモニアを大量生産する革命的技術。特典：アンモニアが使い放題になる。' },
    { id: 'hall_heroult', name: 'ホール・エルー法', key: 'aluminum', req: 'electricity', desc: '溶融氷晶石中でアルミナを電気分解し、アルミニウムを得る方法。' },
    { id: 'kroll', name: 'クロール法', key: 'titanium_sponge', req: 'magnesium', desc: '塩化チタンをマグネシウムで還元してチタンを得る製錬法。' },
    { id: 'converter', name: '転炉法', key: 'steel', req: 'oxygen', desc: '溶けた鉄に酸素を吹き込み、不純物を燃焼させて鋼を作る。' },
    { id: 'cyanidation', name: '青化法', key: 'gold', req: 'sodium_hydroxide', desc: 'シアン化合物（ゲーム内では代用）を用いて金銀を溶かし出す製錬法。' },
    { id: 'zone_melting', name: 'ゾーンメルティング法', key: 'silicon_ingot', req: 'electricity', desc: '局所加熱で不純物を移動させ、超高純度シリコン結晶を作る。' },
    { id: 'steam_cracking', name: 'スチームクラッキング', key: 'ethylene', req: 'naphtha', desc: 'ナフサを高温の水蒸気で熱分解し、プラスチック原料を作る石油化学の核。' },
    { id: 'sohio', name: 'ソハイオ法', key: 'acrylonitrile', req: 'propylene', desc: 'プロピレンとアンモニアを反応させ、アクリロニトリルを合成する。' },
    { id: 'kraft', name: 'クラフト法', key: 'pulp', req: 'sodium_hydroxide', desc: '木材チップを薬品で煮て、強靭な紙パルプを取り出す製法。' },
    { id: 'photolithography', name: 'フォトリソグラフィ', key: 'ic', req: 'photo_resist', desc: '光を使ってシリコンウェハー上に極微細な回路パターンを転写する技術。' }
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
    'smartphone': "手のひらに世界を。誰もが常につながっている時代へ。"
};

const CIVILIZATION_LEVELS = [
    { level: 0, name: '原始時代', year: '紀元前330万年', trigger: null, desc: '自然と共に生きる時代。' },
    { level: 1, name: '石器時代', year: '紀元前250万年', trigger: 'stone_tool', desc: '石を道具として使い始めた時代。' },
    { level: 2, name: '火の利用', year: '紀元前50万年', trigger: 'fire', desc: '火を操り、生活が劇的に変化した時代。' },
    { level: 3, name: '土器の時代', year: '紀元前1万4000年', trigger: 'earthenware', desc: '貯蔵と調理が可能になり、定住が進んだ時代。' },
    { level: 4, name: '道具の進化', year: '紀元前1万年', trigger: 'bow', desc: '狩猟や火起こしの技術が向上した時代。' },
    { level: 5, name: '金属器時代', year: '紀元前1200年', trigger: 'iron', desc: '強靭な鉄を手に入れ、農業や戦争が変わった時代。' },
    { level: 6, name: '中世', year: '5～15世紀', trigger: 'mechanical_clock', desc: '歯車などの機械技術が発展し、職人が活躍した時代。' },
    { level: 7, name: '産業革命', year: '1760年代', trigger: 'steam_engine', desc: '蒸気の力が世界を動かし始めた時代。' },
    { level: 8, name: '電気革命', year: '1870年代', trigger: 'hydroelectric_power', desc: '夜を照らし、動力を生む光の時代。' },
    { level: 9, name: '自動車社会', year: '1900年代', trigger: 'car', desc: '内燃機関により移動の自由が手に入った時代。' },
    { level: 10, name: '化学の夜明け', year: '1920年代', trigger: 'penicillin', desc: '科学の力で病を克服し始めた時代。' },
    { level: 11, name: '近代文明', year: '1920年代', trigger: 'toilet', desc: '清潔で快適な生活が約束された時代。' },
    { level: 12, name: '情報革命', year: '1970年代', trigger: 'computer', desc: 'コンピュータの登場により、情報が世界を駆け巡る時代。' },
    { level: 13, name: '宇宙時代', year: '1960年代', trigger: 'rocket', desc: '地球を飛び出し、星々を目指す人類の新たな挑戦。' },
    { level: 14, name: '高度情報化社会', year: '2000年代', trigger: 'smartphone', desc: '手のひらのデバイスで世界中の知とつながる時代。' },
    { level: 15, name: '人工知能時代', year: '2020年代', trigger: 'ai', desc: '自ら学習し思考する知性が、人類の新たなパートナーとなる時代。' },
    { level: 16, name: 'エネルギー革命', year: '未来', trigger: 'nuclear_power_plant', desc: '原子の力を制御し、無限のエネルギーを手にする未来。' }
];


const RECIPES = {
    // 2-Element Recipes
    'charcoal+manganese_dioxide': 'manganese_monoxide', // First reduction
    'coke+manganese_dioxide': 'manganese_monoxide', // Better reduction
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
    'iron+water': 'hand_warmer', // Iron + Saltwater (water) -> Hand Warmer
    'iron+salt_water': 'hand_warmer', // Iron + Prepared Saltwater -> Hand Warmer
    'fresh_water+glass_vessel': 'cup', // Water + Vessel -> Cup
    'cup+wine': 'wine_glass', // Cup + Wine -> Wine Glass
    'fresh_water+nitrogen_monoxide': 'nitrogen_dioxide', // (Simplified)
    'fresh_water+nitrogen_dioxide': 'nitric_acid', // Nitrogen Dioxide + Water -> Nitric Acid
    'graphite+stone_tool': 'graphite_shards', // Graphite + Stone Tool -> Shards
    'bamboo+stone_tool': 'bamboo_powder', // Bamboo + Stone Tool -> Powder
    'earthenware+stone_tool': 'shards', // Earthenware + Stone Tool -> Shards
    'iron+wood': 'iron_tool', // Iron + Wood -> Iron Tool
    'iron_tool+wood': 'piston', // Wood + Iron Tool -> Piston
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
    'carbon_dioxide+fresh_water': 'carbonated_water', // Solvation
    'carbonated_water+sodium_hydroxide': 'sodium_bicarbonate', // Reaction to bicarbonate
    'fire+sodium_bicarbonate': ['sodium_carbonate', 'fresh_water', 'carbon_dioxide'], // Thermal decomposition
    'ammonia+nitric_acid': 'ammonium_nitrate',
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
    'fire+gold_dust+mercury': 'gold_plating',
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
    'cloth+wood': 'sail',
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
    'water+wheel': 'water_wheel', // Seawater + Wheel -> Water Wheel
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

    // Lead Acid Battery
    'lead+quadrilateral': 'lead_plate',
    'electricity+lead_plate+lead_plate+sulfuric_acid': 'plante_battery',

    // Rare Metal Recipes
    // Ferrochrome: Chromite + Coke + Electric Furnace (Fire+Electricity) -> Ferrochrome + CO2
    'chromite+coke+electricity': ['ferrochrome', 'carbon_dioxide'],

    // Ferronickel: Pentlandite + Coke + Oxygen -> Ferronickel + SO2
    'coke+oxygen+pentlandite': ['ferronickel', 'sulfur_dioxide'],

    // Pure Nickel (Electrolysis)
    'electricity+pentlandite': ['nickel', 'sulfur', 'iron'],

    // Titanium (Kroll Process)
    // 1. Rutile + Coke + Chlorine -> TiCl4 + CO2
    'chlorine+coke+rutile': ['titanium_tetrachloride', 'carbon_dioxide'],
    // 2. TiCl4 + Magnesium -> Titanium Sponge + MgCl2
    'magnesium+titanium_tetrachloride': ['titanium_sponge', 'magnesium_chloride'],
    // 3. Sponge + Electricity (Arc Melting) -> Titanium
    'electricity+titanium_sponge': 'titanium',

    // Molybdenum
    'fire+molybdenite': ['molybdenum_trioxide', 'sulfur_dioxide'], // Roasting
    'hydrogen+molybdenum_trioxide': ['molybdenum', 'fresh_water'], // Reduction

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
    // Lithium Carbonate: Lithium Ore + Fire + Sodium Carbonate
    'fire+lithium_ore+sodium_carbonate': 'lithium_carbonate',
    // Li-ion Battery: Lithium Carbonate + Cobalt + Graphite
    'cobalt+graphite+lithium_carbonate': 'lithium_ion_battery',

    // Electronics
    // LCD: Glass + Electricity + Silicon -> Simplified
    'electricity+glass+silicon': 'lcd',
    // Touch Panel: LCD + Glass + Indium (ITO - Indium Tin Oxide)
    'glass+indium+lcd': 'touch_panel',
    // SoC: IC + IC + Gold (High integration)
    'gold+ic+ic': 'soc',

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
    // Alternative: Mercury amalgam then heat
    'fire+mercury+gold_dust': 'gold',

    // Chromium (from Ferrochrome with Electrolysis)
    'electricity+ferrochrome': ['chromium', 'iron'],

    // Petroleum Refining (Atmospheric Distillation)
    // Crude Oil + Distillation Tower -> LP Gas, Naphtha, Kerosene, Light Oil, Heavy Oil
    'crude_oil+distillation_tower': ['lp_gas', 'naphtha', 'kerosene', 'light_oil', 'heavy_oil'],
    // Heavy Oil Vacuum Distillation (Simplified) -> Asphalt
    'heavy_oil+distillation_tower': 'asphalt',

    // Naphtha Steam Cracking (Thermal Cracking)
    // Naphtha + Steam + Fire -> Ethylene, Propylene, Benzene
    'fire+naphtha+steam': ['ethylene', 'propylene', 'benzene'],

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
    'coal_tar+distillation_tower': ['light_oil', 'naphthalene', 'crude_phenol', 'pitch'],

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
    'hydrogen+oxygen+platinum': 'fuel_cell',
    'fuel_cell+hydrogen+oxygen': ['electricity', 'fresh_water'],

    // New Metal Refining
    // Cobalt: Cobalt Ore + Fire + Oxygen -> Cobalt (Roasting + Reduction)
    'cobalt_ore+coke+fire': 'cobalt',
    // Neodymium: Monazite + Hydrochloric Acid + Electricity -> Neodymium
    'electricity+hydrochloric_acid+monazite': 'neodymium',
    // Indium: Sphalerite (Zinc Ore byproduct) + Acid + Electricity
    'electricity+hydrochloric_acid+sphalerite': ['zinc', 'indium'],

    // Aqua Regia (3 HCl + 1 HNO3)
    'hydrochloric_acid+hydrochloric_acid+hydrochloric_acid+nitric_acid': 'aqua_regia',

    // Firearms
    'alcohol+mercury+nitric_acid': 'mercury_fulminate',
    'fiber+nitric_acid+sulfuric_acid': 'nitrocellulose', // Smokeless Powder
    'iron_pipe+match+wood': 'matchlock_gun',
    'black_powder+iron_pipe+wheel': 'cannon',
    'iron_pipe+press_machine': 'rifled_barrel',
    'lead+press_machine': 'bullet',
    // Modern Cartridge uses Smokeless Powder
    'brass+bullet+mercury_fulminate+nitrocellulose': 'cartridge',
    'cartridge+rifled_barrel+wood': 'rifle',

    // Vinyl Chloride Tree
    'acetylene+hydrogen_chloride': 'vinyl_chloride',
    'vinyl_chloride+vinyl_chloride': 'pvc',
    'formaldehyde+hydrochloric_acid+phenol': ['bakelite', 'fresh_water'],
    'press_machine+pvc': 'pvc_pipe',

    // Advanced Chemistry Recipes
    'nitric_acid+phenol+sulfuric_acid': 'picric_acid',
    'carbon_dioxide+phenol+sodium_hydroxide': 'salicylic_acid',
    'acetic_anhydride+salicylic_acid': 'aspirin',
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
    'liquid_air+distillation_tower': 'liquid_nitrogen',
    'niobium+titanium+liquid_nitrogen': 'super_conductor',
    'concrete+coil+electricity': 'guideway',
    'duralumin+super_conductor+guideway': 'maglev_train',
    // AC Recipes
    'copper+iron_tool': 'copper_pipe',
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
    'iron+iron_tool': 'propeller',
    'wood+iron_tool': 'propeller',
    'cloth+box+fire': 'hot_air_balloon',
    'cloth+hydrogen+propeller': 'airship',
    'duralumin+engine+propeller': 'airplane',
    'titanium_sponge+press_machine': 'titanium_plate',
    'titanium_plate+compressor+kerosene': 'jet_engine',
    'duralumin+jet_engine+glass': 'jet_plane',
    'lithium_hydroxide+carbon_rod+aluminum': 'lithium_ion_battery',
    'car_body+motor+lithium_ion_battery': 'electric_car',
    'plastic_container+motor+propeller+ic': 'drone',
    'iron_plate+iron_tool': 'iron_pipe',
    'wheel+wheel+iron_pipe+gear': 'bicycle',
    'bicycle+engine+gasoline': 'motorcycle',
    // Refinement
    'cassiterite+coal': 'tin',
    'lithium_ore+sulfuric_acid': 'lithium_carbonate',
    'bird+stone_tool': 'meat', // Changed from fish to bird to avoid conflict with bone recipe
    'plant+plant': 'soybean',
    'soybean+corn+salt+moldy_bread': 'soy_sauce',
    'aluminum+polyethylene': 'retort_pouch',
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
    'iron_tool+wood': 'wood_chip',
    'sodium_hydroxide+sulfurous_acid+wood_chip': 'pulp', // Kraft process
    'press_machine+pulp': 'paper',
    'naphtha+sulfuric_acid': 'photo_resist', // Simplified Resist synthesis
    'light_bulb+photo_resist+wafer': 'ic', // Photolithography step
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
    'pendulum_clock', 'chronometer', 'quartz_clock', 'atomic_clock', 'fuel_cell'
];

// Player State
let inventoryCounts = {};
let discovered = new Set(); // Start with nothing discovered
let unlockedFeats = new Set(); // Track shown notifications
let userInventoryOrder = []; // Stores IDs in user-defined order
let currentArea = 'japan';
let currentBookSearchQuery = '';
let currentCivilizationLevel = 0; // Civilization Level
let isLoading = false; // Flag to suppress logs during load
let isLiteMode = false;

// Slots
let slot1 = null;
let slot2 = null;
let slot3 = null;
let slot4 = null;
let slot5 = null;
let currentBookTab = 'elements'; // 'elements' or 'industry'
let currentSortMode = 'id'; // 'id' or 'emoji'
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
    inventory: document.getElementById('element-list'),
    slot1: document.getElementById('slot-1'),
    slot2: document.getElementById('slot-2'),
    slot3: document.getElementById('slot-3'),
    slot4: document.getElementById('slot-4'),
    slot5: document.getElementById('slot-5'),
    result: document.getElementById('slot-result'),
    msgLog: document.getElementById('message-log'),
    deleteSaveBtn: document.getElementById('delete-save-btn'),
    refineBtn: document.getElementById('refine-btn'),
    distillBtn: document.getElementById('distill-btn'),
    carbonizeBtn: document.getElementById('carbonize-btn'),
    sortIdBtn: document.getElementById('sort-id-btn'),
    sortEmojiBtn: document.getElementById('sort-emoji-btn'),
    // Modal
    modal: document.getElementById('detail-modal'),
    modalBody: document.getElementById('modal-body'),
    closeModal: document.getElementById('close-modal'),
    manualSortBtn: document.getElementById('manual-sort-btn'), // New
    inventorySearch: document.getElementById('inventory-search'), // New
    toggleLiteBtn: document.getElementById('btn-toggle-lite'), // Lite Mode
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
        log("あなたはこの原始時代唯一の科学者です。さぁ、この自然だらけの土地からすべてが始まります！早速実験を始めていきましょう！");
    } else {
        isLoading = false;
        log("前回の続きから開始します。");
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
            if (confirm("デバッグ機能：全要素を解放しますか？")) {
                unlockAllElements();
                targetElement.style.color = '#4caf50';
                showFloatText(targetElement, "全解放！");
                log("🔧 デバッグ機能：全要素を解放しました。");
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
    saveGame();
    updateStats();
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
        civLevel: currentCivilizationLevel
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
            return true;
        } catch (e) {
            console.error("Save file corrupted", e);
            return false;
        }
    }
    return false;
}

function resetGameData() {
    if (confirm("本当にデータを削除して最初から始めますか？")) {
        localStorage.removeItem('nature_science_save');
        location.reload();
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

    ui.navField.classList.remove('active');
    ui.navLab.classList.remove('active');
    ui.navBook.classList.remove('active');

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
    }
}

// === Gathering ===
// === Area System ===
function switchArea(area) {
    currentArea = area;
    let msg = "移動しました。";
    if (area === 'japan') msg = "日本に戻りました。";
    else if (area === 'asia') msg = "東南アジアに到着しました。";
    else if (area === 'america') msg = "アメリカ大陸に到着しました。";
    else if (area === 'south_america') msg = "南米大陸に到着しました。";
    else if (area === 'europe') msg = "スペインに到着しました。";
    else if (area === 'south_africa') msg = "南アフリカに到着しました。";
    else if (area === 'australia') msg = "オーストラリアに到着しました。";
    else if (area === 'moon') msg = "月面に着陸しました。";

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
            mapBtn.innerHTML = currentArea === 'japan' ? '🚢 出航' : '🗺️ 移動';
        }
    }

    // Determine Map Button text for Moon
    if (currentArea === 'moon') {
        const mapBtn = document.querySelector('.gather-spot[data-id="foreign"]');
        if (mapBtn) {
            mapBtn.style.display = 'flex';
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
    const rocketMapSection = document.getElementById('rocket-map-section');

    // Unlock logic for Moon
    if (rocketMapSection) {
        if (discovered.has('rocket') && discovered.has('launch_pad')) {
            rocketMapSection.style.display = 'block';
        } else {
            rocketMapSection.style.display = 'none';
        }
    }

    if (closeMap) closeMap.addEventListener('click', () => mapModal.style.display = 'none');
    if (mapModal) mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal) mapModal.style.display = 'none';
    });

    if (destLocal) {
        destLocal.addEventListener('click', () => {
            mapModal.style.display = 'none';
            switchArea('japan');
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
            if (!discovered.has('spacesuit')) {
                alert("宇宙服がありません！生身では宇宙空間に出られません。");
                return;
            }
            mapModal.style.display = 'none';
            switchArea('moon');
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
                    if (discovered.has('rocket') && discovered.has('launch_pad')) {
                        rocketMapSection.style.display = 'block';
                    } else {
                        rocketMapSection.style.display = 'none';
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
                else if (rand < 0.5) itemId = 'shell';
                else if (rand < 0.7) itemId = 'sand';
                else itemId = 'water';
            } else if (spotType === 'forest') {
                // Forest: 30% Wood, 15% (Stone, Grape, Plant, Bamboo), 10% Lacquer
                const rand = Math.random();
                if (rand < 0.30) itemId = 'wood';
                else if (rand < 0.45) itemId = 'stone';
                else if (rand < 0.60) itemId = 'grape';
                else if (rand < 0.75) itemId = 'plant';
                else if (rand < 0.90) itemId = 'bamboo';
                else itemId = 'lacquer';
            } else if (spotType === 'land') {
                // Land: 60% Earth, 25% Clay, 15% Diatomaceous Earth
                const rand = Math.random();
                if (rand < 0.15) itemId = 'diatomaceous_earth';
                else if (rand < 0.4) itemId = 'clay';
                else itemId = 'earth';
            } else if (spotType === 'air') {
                // Sky: 5% Lightning, 95% Air
                itemId = (Math.random() < 0.05) ? 'lightning' : 'air';
            } else if (spotType === 'river') {
                // River: 0.1% Platinum, 10% Gold Dust, (20% Iron Sand if has Magnet), else Sand/Stone/Water
                const rand = Math.random();
                const hasMagnet = (inventoryCounts['magnet'] > 0) || (inventoryCounts['electromagnet'] > 0);

                if (rand < 0.001) itemId = 'platinum';
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
                    if (rand < 0.07) oreItem = 'cinnabar';
                    else if (rand < 0.12) oreItem = 'copper_sulfate';
                    else if (rand < 0.17) oreItem = 'cassiterite';
                    else if (rand < 0.25) oreItem = 'manganese_dioxide';
                    else if (rand < 0.33) oreItem = 'galena';
                    else if (rand < 0.41) oreItem = 'sphalerite';
                    else if (rand < 0.53) oreItem = 'coal';
                    else if (rand < 0.61) oreItem = 'graphite';
                    else if (rand < 0.69) oreItem = 'magnetite';
                    else if (rand < 0.77) oreItem = 'scheelite';
                    else if (rand < 0.85) oreItem = 'calcite';
                    else if (rand < 0.90) oreItem = 'barite';

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
                itemId = 'rubber_tree';
            } else if (spotType === 'spice_field') {
                itemId = 'spice';
            } else if (spotType === 'corn_field') {
                itemId = 'corn';
            } else if (spotType === 'andes') {
                itemId = 'potato';
            } else if (spotType === 'amazon') {
                itemId = 'cacao';
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
                // South Africa (Rare Metals)
                const rand = Math.random();
                if (rand < 0.20) itemId = 'chromite';
                else if (rand < 0.40) itemId = 'pentlandite';
                else if (rand < 0.60) itemId = 'molybdenite';
                else if (rand < 0.80) itemId = 'pyrochlore';
                else itemId = 'rutile';
                // Add chance for Uranium in South Africa too if desired, but Australia is famous for it.
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
                // Moon Crater: Regolith, Sand, Iron, Titanium, Platinum(rare)
                const rand = Math.random();
                if (rand < 0.35) itemId = 'stone'; // Moon rock (Regolith)
                else if (rand < 0.55) itemId = 'sand'; // Moon sand
                else if (rand < 0.75) itemId = 'iron_ore';
                else if (rand < 0.92) itemId = 'titanium_sponge';
                else itemId = 'platinum'; // Very rare
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
        log("🖐️ 並べ替えモード: 入れ替えたいアイテムを2つ順番にクリックしてください。");
    } else {
        ui.inventory.classList.remove('sorting-mode');
        ui.manualSortBtn.innerHTML = "🖐️ 並べ替え";
        ui.manualSortBtn.style.background = "rgba(255,255,255,0.5)";
        ui.manualSortBtn.style.color = "#666";
        log("並べ替えを終了しました。");
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
        ui.inventory.innerHTML = '<div style="padding:10px; color:#999;">倉庫は空っぽです。<br>フィールドで採取してください。</div>';
        return;
    }

    const query = ui.inventorySearch ? ui.inventorySearch.value.trim().toLowerCase() : '';

    userInventoryOrder.forEach((id, index) => {
        const data = ELEMENTS[id];
        // Filter by Search Query
        if (query && !data.name.toLowerCase().includes(query)) {
            return; // Skip rendering
        }

        const count = inventoryCounts[id];

        const card = document.createElement('div');
        card.className = 'element-card pop-anim';
        if (isManualSortMode && selectedSortItemId === id) {
            card.classList.add('selected-sort');
        }

        card.draggable = !isManualSortMode; // Disable drag in sort mode
        card.dataset.id = id;
        card.dataset.index = index;

        // Visual Selection Logic (Inline for safety)
        if (isManualSortMode && selectedSortItemId === id) {
            card.classList.add('selected-sort');
            card.style.border = "3px solid #ff9800";
            card.style.backgroundColor = "#fff3e0";
            card.style.transform = "scale(1.05)";
            console.log('Highlighting item:', id);
        } else {
            card.classList.remove('selected-sort');
            card.style.border = "";
            card.style.backgroundColor = "";
            card.style.transform = "";
        }

        let badgeHtml = `<div class="count-badge">x${count}</div>`;

        const isInfinite = BASE_REUSABLE_ITEMS.includes(id) ||
            (id === 'nitric_acid' && discovered.has('nitric_acid')) ||
            (id === 'sulfuric_acid' && discovered.has('contact_process_flag')) ||
            (id === 'electricity' && discovered.has('hydroelectric_power')) ||
            (id === 'ammonia' && discovered.has('high_pressure_reactor'));

        if (isInfinite) {
            badgeHtml = '';
        }

        card.innerHTML = `
            <div class="element-emoji" style="pointer-events:none;">${data.emoji}</div>
            <div class="element-name" style="pointer-events:none;">${data.name}</div>
            ${badgeHtml}
        `;

        // Click Handler (Single definition)
        card.onclick = function () {
            onInventoryClick(id);
        };

        // Drag events removed - manual sort button only

        ui.inventory.appendChild(card);
    });
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
        log(`✨ 新種発見！ [${ELEMENTS[id].name}]`);
        updateStats();
        updateCivilizationLevel();
    }

    saveGame();
    renderInventory();
}

function consumeItem(id, amount) {
    if (inventoryCounts[id] >= amount) {
        inventoryCounts[id] -= amount;
        if (inventoryCounts[id] <= 0) {
            delete inventoryCounts[id];
            // Remove from order list if we want to clean up, 
            // but keeping it might be better for preserving position if re-acquired.
            // For now, let's remove it to keep the view clean.
            userInventoryOrder = userInventoryOrder.filter(itemId => itemId !== id);
        }

        saveGame();
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

    if (!slot1) setSlot(1, id);
    else if (!slot2) setSlot(2, id);
    else if (!slot3) setSlot(3, id);
    else if (!slot4) setSlot(4, id);
    else if (!slot5) setSlot(5, id);
    else {
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
    el.innerHTML = `<span class="slot-placeholder">要素${label}</span>`;
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
        log("素材がセットされていません。（最低2つ必要です）");
        return;
    }

    const currentInputs = [slot1, slot2];
    if (slot3) currentInputs.push(slot3);
    if (slot4) currentInputs.push(slot4);
    if (slot5) currentInputs.push(slot5);

    const key = currentInputs.sort().join('+');
    let resultId = NORMALIZED_RECIPES[key];

    // Special Unlock for Contact Process
    // Normalizing the comparison key too just in case
    const contactProcessKey = ['fresh_water', 'fuming_sulfuric_acid'].sort().join('+');
    if (key === contactProcessKey) {
        if (!discovered.has('contact_process_flag')) {
            discovered.add('contact_process_flag');
            log("🏭 【技術革新】接触法の確立に成功しました！ 硫酸の大量生産が可能になります！");
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
                log(`素材が足りません！ [${ELEMENTS[id].name}] が不足しています。`);
                renderInventory();
                return;
            }
        }

        // Tools that are not consumed
        const reusableIds = [...BASE_REUSABLE_ITEMS];
        if (discovered.has('nitric_acid')) reusableIds.push('nitric_acid');
        if (discovered.has('contact_process_flag')) reusableIds.push('sulfuric_acid');
        if (discovered.has('hydroelectric_power')) reusableIds.push('electricity');
        if (discovered.has('high_pressure_reactor')) reusableIds.push('ammonia');

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
            <div class="element-name">${resData.name}${results.length > 1 ? '等' : ''}</div>
        `;
        ui.result.classList.add('filled');
        ui.result.parentElement.classList.add('pop-anim');

        if (results.length > 1) {
            const names = results.map(r => ELEMENTS[r].name).join('と');
            log(`合成成功！ [${names}] を作成しました。`);
        } else {
            log(`合成成功！ [${resData.name}] を作成しました。`);
            if (GREAT_INVENTIONS[mainResId]) {
                setTimeout(() => {
                    log(`🎉 【偉業達成】 ${GREAT_INVENTIONS[mainResId]}`);
                }, 800);
            }
        }
        resetSlots();

    } else {
        log("合成失敗... 何も起きませんでした。");
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
        log("燃料となる「木炭」を持っていません。乾留所で作ってください。");
        return;
    }
    if (!inventoryCounts[FIRE_ID] || inventoryCounts[FIRE_ID] < 1) {
        log("製錬には加熱するための「火」が必要です。");
        return;
    }
    if (!inventoryCounts[OVEN_ID] || inventoryCounts[OVEN_ID] < 1) {
        log("製錬には炉となる「土器」が必要です。");
        return;
    }

    // 2. Determine target candidates
    const candidates = [
        { id: 'noble_lead', result: 'silver', req: ['ash_cupel', 'air'], reqMsg: "貴鉛の精錬（灰吹法）には「灰床」と「空気」が必要です。" },
        { id: 'lead_oxide', result: 'lead' },
        { id: 'manganese_monoxide', result: 'manganese' },
        { id: 'cassiterite', result: 'tin' },
        { id: 'iron_ore', result: 'iron' },
        { id: 'magnetite', result: 'iron' },
        { id: 'iron_sand', result: 'iron' },
        { id: 'cinnabar', result: 'mercury' }
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
        log("製錬できるもの（鉄鉱石、酸化鉛、錫石など）を持っていません。");
        return;
    }

    if (possible.length === 1) {
        executeRefining(possible[0]);
    } else {
        const msgP = log("製錬する鉱石を選んでください：");
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
            btn.innerText = ELEMENTS[p.id].name;

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
    log(`製錬完了！ ${ELEMENTS[target.id].name}を製錬して [${resData.name}${resData.emoji}] を作りました！`);
}

function distillWater() {
    const hasEarthenware = inventoryCounts['earthenware'] && inventoryCounts['earthenware'] > 0;
    const hasFire = inventoryCounts['fire'] && inventoryCounts['fire'] > 0;

    if (!hasEarthenware || !hasFire) {
        log("蒸留設備が足りません！ [土器🏺] と [火🔥] が必要です。");
        return;
    }

    const candidates = [
        { id: 'water', type: 'sea', name: '海水 (→ 淡水+塩)' },
        { id: 'wine', type: 'wine', name: 'ワイン (→ 淡水+エタノール)' },
        { id: 'wood_vinegar', type: 'wood_vinegar', name: '木酢液 (→ 粗木精)' },
        { id: 'calcium_acetate', type: 'calcium_acetate', name: '酢酸カルシウム (→ メタノール)' },
        { id: 'coal_tar', type: 'coal_tar', name: 'コールタール (→ 軽油/中油/重油/アントラセン油/ピッチ)', req: 'glass_vessel' },
        { id: 'crude_phenol', type: 'crude_phenol', name: '粗フェノール (→ フェノール)' },
        { id: 'naphthalene', type: 'naphthalene', name: 'ナフタレン (→ 工業用ナフタレン)' },
        { id: 'anhydrous_sodium_acetate', type: 'anhydrous_sodium_acetate', name: '無水酢酸Na+硫酸 (→ 氷酢酸+硫酸Na)', req: 'sulfuric_acid' }
    ];

    const possible = candidates.filter(c => {
        if (c.req) {
            return inventoryCounts[c.id] > 0 && inventoryCounts[c.req] > 0;
        }
        return inventoryCounts[c.id] && inventoryCounts[c.id] > 0;
    });

    if (possible.length === 0) {
        log("蒸留できるもの（海水、ワイン）を持っていません。");
        return;
    }

    if (possible.length === 1) {
        executeDistillation(possible[0]);
    } else {
        const msgP = log("蒸留する素材を選んでください：");
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
        log(`蒸留完了！ ワインから [淡水💧] と [アルコール🧪] を抽出しました。`);
    } else if (target.type === 'wood_vinegar') {
        addItem('crude_wood_alcohol', 1);
        log(`蒸留完了！ 木酢液から [粗木精🧪] を抽出しました。`);
    } else if (target.type === 'calcium_acetate') {
        addItem('methanol', 1);
        log(`乾留完了！ 酢酸カルシウムから [メタノール🧪] を抽出しました。`);
    } else if (target.type === 'coal_tar') {
        addItem('light_oil', 1);
        addItem('middle_oil', 1);
        addItem('heavy_oil', 1);
        addItem('anthracene_oil', 1);
        addItem('pitch', 1);
        addItem('pitch', 1);
        log(`分留完了！ コールタールから [軽油⛽][中油🧪][重油🛢️][アントラセン油🧪][ピッチ⬛] を分離しました！`);
    } else if (target.type === 'crude_phenol') {
        addItem('phenol', 1);
        log(`蒸留完了！ 粗フェノールを精製して [フェノール🧪] を得ました！`);
    } else if (target.type === 'naphthalene') {
        addItem('industrial_naphthalene', 1);
        log(`昇華精製完了！ より純度の高い [工業用ナフタレン🏭] を得ました！`);
    } else if (target.type === 'anhydrous_sodium_acetate') {
        consumeItem('sulfuric_acid', 1);
        addItem('glacial_acetic_acid', 1);
        addItem('sodium_sulfate', 1);
        log(`蒸留完了！ 無水酢酸ナトリウムと硫酸から [氷酢酸🧪] と [硫酸ナトリウム🧪] を生成しました！`);
    } else {
        addItem('fresh_water', 1);
        addItem('salt', 1);
        log(`蒸留完了！ 海水から [淡水💧] と [塩🧂] を作りました。`);
    }
}

function carbonizeWood() {
    const FIRE_ID = 'fire';
    const OVEN_ID = 'earthenware';

    if (!inventoryCounts[FIRE_ID] || inventoryCounts[FIRE_ID] < 1) {
        log("乾留には「火」が必要です。弓などを使って火を起こしましょう！");
        return;
    }
    if (!inventoryCounts[OVEN_ID] || inventoryCounts[OVEN_ID] < 1) {
        log("乾留には密閉する容器として「土器」が必要です。");
        return;
    }

    const candidates = [
        { id: 'coal', name: '石炭', type: 'coal' },
        { id: 'wood', name: '木材', type: 'wood' },
        { id: 'calcium_acetate', name: '酢酸カルシウム', type: 'calcium_acetate' }
    ];

    const possible = candidates.filter(c => inventoryCounts[c.id] && inventoryCounts[c.id] > 0);

    if (possible.length === 0) {
        log("乾留できるもの（木材、石炭、酢酸カルシウム）を持っていません。");
        return;
    }

    if (possible.length === 1) {
        executeCarbonization(possible[0]);
    } else {
        const msgP = log("乾留する素材を選んでください：");
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
        log("乾留完了！ 石炭から [コークス⬛]、[コールタール🏺]、[石炭ガス💨] を抽出しました。");
    } else if (target.type === 'wood') {
        addItem('charcoal', 1);
        let resultLog = `乾留完了！ 木材から [木炭⬛] ができました。`;
        if (Math.random() < 0.5) {
            addItem('wood_vinegar', 1);
            resultLog += ` さらに [木酢液🏺] も回収しました！`;
        }
        log(resultLog);
    } else if (target.type === 'calcium_acetate') {
        addItem('acetone', 1);
        addItem('calcium_carbonate', 1);
        log(`乾留完了！ 酢酸カルシウムを乾留して [アセトン🧪] と [炭酸カルシウム🦴] を得ました！`);
    }
}

function performExtraction() {
    // Candidates
    const candidates = [];

    // 1. Benzene Extraction
    if (inventoryCounts['light_oil'] > 0 && inventoryCounts['sulfuric_acid'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'benzene_synthesis',
            name: '軽油+硫酸+水酸化Na (→ ベンゼン)',
            req: ['light_oil', 'sulfuric_acid', 'sodium_hydroxide'],
            result: 'benzene'
        });
    }

    // 2. Phenoxide & Crude Naphthalene Extraction (Middle Oil + NaOH)
    if (inventoryCounts['middle_oil'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'phenoxide_extraction',
            name: '中油+水酸化Na (→ フェノキシド+粗製ナフタレン)',
            req: ['middle_oil', 'sodium_hydroxide'],
            results: ['phenoxide', 'crude_naphthalene'] // Special handler needed or adjust executeExtraction
        });
    }

    // 3. Naphthalene Purification (Crude Naphthalene + Sulfuric Acid + NaOH)
    if (inventoryCounts['crude_naphthalene'] > 0 && inventoryCounts['sulfuric_acid'] > 0 && inventoryCounts['sodium_hydroxide'] > 0) {
        candidates.push({
            id: 'naphthalene_purification',
            name: '粗製ナフタレン+硫酸+水酸化Na (→ ナフタレン)',
            req: ['crude_naphthalene', 'sulfuric_acid', 'sodium_hydroxide'],
            result: 'naphthalene'
        });
    }

    if (candidates.length === 0) {
        log("抽出できる組み合わせ（軽油+硫酸+水酸化Naなど）を持っていません。");
        return;
    }

    if (candidates.length === 1) {
        executeExtraction(candidates[0]);
    } else {
        const msgP = log("抽出するプロセスを選んでください：");
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
    }
}

function executeExtraction(target) {
    if (target.req) {
        target.req.forEach(r => consumeItem(r, 1));
    } else {
        consumeItem(target.id, 1);
    }

    if (target.results) {
        let msg = "抽出完了！ 化学的な処理によって ";
        target.results.forEach(rid => {
            addItem(rid, 1);
            const rd = ELEMENTS[rid];
            msg += `[${rd.name}${rd.emoji}] `;
        });
        msg += "を分離しました！";
        log(msg);
    } else {
        addItem(target.result, 1);
        const resData = ELEMENTS[target.result];
        log(`抽出完了！ 化学的な処理によって [${resData.name}${resData.emoji}] を抽出しました！`);
    }
}

function refineCrudeOil() {
    if (!inventoryCounts['crude_oil'] || inventoryCounts['crude_oil'] < 1) {
        log("原油を持っていません。");
        return;
    }

    consumeItem('crude_oil', 1);

    const oilProducts = ['lp_gas', 'gasoline', 'naphtha', 'kerosene', 'light_oil', 'heavy_oil', 'asphalt'];
    let msg = "精製完了！ 原油を蒸留塔で分離し、以下の製品を得ました：<br>";

    oilProducts.forEach(prod => {
        addItem(prod, 1);
        const d = ELEMENTS[prod];
        msg += `[${d.name}${d.emoji}] `;
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
                log("【新発見】蒸気機関の発明により、採掘技術が向上しました。「油田」が解放されました！");
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
                log("【新施設】蒸留塔の建設により、「製油所」が稼働を開始しました！");
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
                log("【新天地】機帆船の完成により、海の向こう側へ行けるようになりました！「世界地図」が解放されました！");
                unlockedFeats.add('foreign_unlock');
                saveGame();
            }
        }
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
    const controls = document.getElementById('encyclopedia-controls');
    if (!grid) return;
    grid.innerHTML = '';

    // Civilization Info Display
    const header = document.querySelector('#view-book .field-header');
    let civInfo = document.getElementById('civilization-info');
    if (!civInfo) {
        civInfo = document.createElement('div');
        civInfo.id = 'civilization-info';
        civInfo.style.marginBottom = '15px';
        civInfo.style.padding = '10px';
        civInfo.style.background = 'linear-gradient(135deg, #fff3e0, #ffe0b2)';
        civInfo.style.borderRadius = '8px';
        civInfo.style.border = '1px solid #ff9800';
        civInfo.style.color = '#e65100';
        if (header) {
            // Insert after h2
            const p = header.querySelector('p');
            if (p) p.after(civInfo);
            else header.appendChild(civInfo);
        }
    }

    // Click History
    civInfo.style.cursor = 'pointer';
    civInfo.onclick = showCivilizationList;
    civInfo.title = "タップして歴史を見る";

    const currentCiv = CIVILIZATION_LEVELS.find(c => c.level === currentCivilizationLevel) || CIVILIZATION_LEVELS[0];
    let nextCivName = "???";

    // Find next level
    const nextLevelIdx = CIVILIZATION_LEVELS.findIndex(c => c.level === currentCivilizationLevel) + 1;
    if (nextLevelIdx < CIVILIZATION_LEVELS.length) {
        // If trigger is known (discovered), show name? No, usually hidden.
        // But maybe hint?
        // nextCivName = "次の時代"; 
    } else {
        nextCivName = "最高到達点";
    }

    // Set civInfo content
    civInfo.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:0.85rem; color:#d84315;">
                <span>文明レベル ${currentCiv.level}</span>
                <span style="margin-left:15px;">${currentCiv.year}</span>
            </div>
            <div style="font-size:1.3rem; font-weight:bold; color:#e65100; margin:5px 0;">${currentCiv.name}</div>
            <div style="font-size:0.85rem; color:#bf360c;">${currentCiv.desc}</div>
        </div>
    `;

    // Update Tabs
    const tabElements = document.getElementById('tab-elements');
    const tabIndustry = document.getElementById('tab-industry');

    // Reset styles
    [tabElements, tabIndustry].forEach(btn => {
        if (btn) {
            btn.style.background = 'rgba(255,255,255,0.5)';
            btn.style.color = '#555';
            btn.style.boxShadow = 'none';
        }
    });

    if (currentBookTab === 'elements') {
        if (tabElements) {
            tabElements.style.background = '#2e7d32';
            tabElements.style.color = 'white';
            tabElements.style.boxShadow = '0 4px 10px rgba(46, 125, 50, 0.3)';
        }
        grid.style.display = 'grid'; // Grid layout for elements
        renderElementsEncyclopedia(grid);
    } else if (currentBookTab === 'industry') {
        if (tabIndustry) {
            tabIndustry.style.background = '#2e7d32';
            tabIndustry.style.color = 'white';
            tabIndustry.style.boxShadow = '0 4px 10px rgba(46, 125, 50, 0.3)';
        }
        grid.style.display = 'grid'; // Grid layout for industry
        renderIndustrialEncyclopedia(grid);
    }
}

function renderElementsEncyclopedia(grid) {
    grid.innerHTML = ''; // Clear grid
    let allIds = Object.keys(ELEMENTS);

    if (currentBookSearchQuery) {
        allIds = allIds.filter(id => {
            if (!discovered.has(id)) return false;
            const data = ELEMENTS[id];
            return data.name.toLowerCase().includes(currentBookSearchQuery) ||
                data.desc.toLowerCase().includes(currentBookSearchQuery);
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
        }
        grid.appendChild(card);
    });
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
        'rubber_tree', 'spice', 'corn', 'potato', 'cacao', 'fluorite',
        'seaweed', 'fish', 'mercury', 'brine',
        'chromite', 'pentlandite', 'molybdenite', 'pyrochlore', 'rutile',
        'bauxite', 'cobalt_ore', 'monazite', 'lithium_ore', 'uranium_ore',
        'titanium_sponge'
    ];

    const locationMap = {
        'rubber_tree': '東南アジア（密林）',
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
        'seaweed': 'フィールド（海）',
        'fish': 'フィールド（海）',
        'mercury': 'フィールド（洞窟）',
        'titanium_sponge': '月面（クレーター）'
    };

    if (gatherables.includes(id)) {
        let loc = locationMap[id] || 'フィールド';
        recipeHtml += `<p>採取可能：${loc}で探そう</p>`;
    }

    // 2. Smeltery?
    if (id === 'iron' || id === 'lead' || id === 'manganese' || id === 'tin') {
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
    // 6. Special extraction?
    else if (id === 'mercury') {
        recipeHtml += `<p>入手方法：製錬所（または加熱設備）で「辰砂」を熱して抽出する</p>`;
    }
    else if (id === 'silver') {
        recipeHtml += `<p>入手方法：工業的製法「灰吹法」を用いて貴鉛から分離する</p>`;
    }
    // 7. Dynamic Recipe (Battery)
    else if (id === 'battery') {
        recipeHtml += `<h3>合成レシピ</h3><div style="margin:5px 0;">導電性物質(金属/炭) x2 + 食塩水 (※異なる2種類)</div>`;
    }

    // 6. Crafted? (Check Recipes)
    const recipesFound = [];
    for (const [inputs, result] of Object.entries(RECIPES)) {
        const results = Array.isArray(result) ? result : [result];
        if (results.includes(id)) {
            const inputsList = inputs.split('+');
            const names = inputsList.map(inId => {
                const el = ELEMENTS[inId];
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
        recipeHtml = `<p>入手方法：不明</p>`;
    }

    ui.modalBody.innerHTML = `
        <div class="element-emoji" style="font-size:4rem; margin-bottom:10px; overflow: visible; width: auto;">${data.emoji}</div>
        <h2>${data.name}</h2>
        <p style="margin-bottom:20px;">${data.desc}</p>
        <div style="text-align:left; background:rgba(0,0,0,0.05); padding:15px; border-radius:10px;">
            ${recipeHtml}
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

init();
