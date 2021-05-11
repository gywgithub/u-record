<template>
    <div id="amusementDetail">
        <van-nav-bar
                title=""
                fixed
                placeholder
                safe-area-inset-top>
            <template #left>
                <van-icon name="arrow-left" color="#333" size="18" @click="toPrve"/>
                <p class="titleEplice">{{titleName}}</p>
            </template>
            <template #right>
                <van-icon name="edit" class="editFeedfack"/><span class="editTxt mr15">写回答</span>
                <van-icon name="ellipsis" class="moreHanndle" @click.stop="showShare = true"/>
            </template>
        </van-nav-bar>
        <van-row class="pl10 pr10 mt20" v-show="detailType == 1">
            <van-col span="24">
                <div class="content fc66">
                    <p>1.你没理解我的那些瞬间 </p>
                    <p>我从来没怪过你 </p>
                    <p>你也可以永远长不大 </p>
                    <p>可我不能永远没有安全感</p><br/>
                    <p>2.你不来找我 我也没办法说想你</p><br/>
                    <p>3.很多事情我能想通 也能接受 但我很难过</p><br/>
                    <p>4.一个人全身的血液换掉要七年 也就是说 我只能在这里等你七年</p><br/>
                    <p>5.那你呢</p>
                    <p>你也喜欢我吗</p>
                    <p>有想见我吗</p>
                    <p>有思念我吗</p>
                    <p>有像我喜欢你那样</p>
                    <p>喜欢我到放不下吗</p>
                    <p>不 你没有</p><br/>
                    <img src="https://pic2.zhimg.com/50/v2-a82b3a51c109cef3088e0ec682f07bc3_hd.jpg?source=1940ef5c" alt="">
                    <p>6.我会去关注你的一切 会去了解你的所有 你也该回头看我了</p><br/>
                    <p>7.人的崩溃都是悄无声息的 你坐在那里一动不动 内心却是一片狼藉 满地灰烬</p><br/>
                    <p>8.我想做你的优先考虑项</p><br/>
                    <p>9.我喜欢的少年打天上来</p><br/>
                    <p>他无意掀翻烛火</p>
                    <p>点燃我双眸盛满的暮色</p><br/>
                    <p>10.我偏要起婆娑 炽艳火 自废堕 闲骨格 永葬</p>
                    <p>荒墟 剜心截舌 独吞絮果</p><br/>
                    <p>11.我贪恋的人间烟火不偏不倚 全都是你</p><br/>
                    <p>12.有空和我去看个星星晒个月亮吗</p><br/>
                    <p>月亮和星星没空的话</p>
                    <p>那我们就去路灯下站站</p>
                    <p>如果你有空的话</p><br/>
                    <p>13.第一不可忘国忧，第二不可负卿卿</p><br/>
                    <p>14.我在人间贩卖黄昏 只为收集世间温柔去见你</p><br/>
                    <p>15.别否定自己，你特别好，特别温柔，特别值得。</p><br/>
                    <p>16.把你归还给人海，是清醒也是知趣。</p><br/>
                    <p>17.有的人就是会天生自我厌恶，我非常清楚自己就是那种表面看的过去，各方面普普通通，有点小特长，坐在人群里不至于太扎眼，实际上非常糟糕的人。</p>
                </div>
            </van-col>
        </van-row>
        <van-row class="pl10 pr10 mt20" v-show="detailType == 2">
            <van-col span="24">
                <div class="content fc66">
                    <p>很多人有个误区，他们说现在的社会“上升通道逐渐关闭”、“阶层日益固化”，是社会病了。但其实，这才是社会原本的常态。中国过去的两千年里，大部分时间都是如此。西方这种数百年稳定的社会，阶层固化更是早已天经地义。</p>
                    <br/><br/><img src="http://img.yao51.com/jiankangtuku/ppqssnqwky.jpeg" alt="">
                    <br/><br/><p>阶层剧烈变动的年代才是历史的异态。“旧时王谢堂前燕，飞入寻常百姓家”之所以成为千古名句，恰恰就是因为这一幕不多见，不常见，很稀奇。时人异之，才产生了文学效果。一个流动性过大的社会，一定是制度不完善的，完善的制度不会容忍高流动性。</p>
                    <br/><p>但恰好，我们这代人的祖辈和父辈生在了中国数百年来变动最剧烈的几十年里，每个大家族都有那么几个人的人生之跌宕起伏，简直可以拿来拍电影。中国在短短一百年时间里，经历了不下七八次政权变更和近乎180度的政治转向。《霸王别姬》、《大宅门》这样的影视作品之所以成为经典，就是因为成功反映了我们这一百年来的个人命运之不可预测，并引起了亿万家庭的共鸣。</p>
                    <br/><p>这种人生经验导致我们这几代人误把这种阶层大幅波动的局面当成了世界的常态。而最近20多年看着尘埃落定，要回归历史长河的真·常态了，很多人就不适应，受不了了。</p>
                    <br/><br/><img src="../../assets/i0.png" alt="">
                    <br/><p>良好的家庭环境在任何年代都会极大的帮助后代晋升到社会高阶位置。将相无种只是平民阶层的幻想和安慰剂，尽管这句话是中国普通人千年来的精神支柱（甚至可以上升到民族格言），但最先喊出这句话的陈胜吴广，最后改变了他们的阶层吗？ </p>
                    <br/><p>精英阶层在历史上名头多变，无论你管他们叫什么，豪强、士族、门阀、权贵、集团、派系、二代，当他们作为一个整体出现的时候，首先是一座城堡。城堡的第一功能，是防住别人再进来。所以先进来的人，会不断地增加城墙的高度，以阻拦尚未进来的人挤来摊薄自己的特权和福利。不过他们会把砌城墙的行为包装一下，使得普通人很难分辨。</p>
                    <br/><p>今天精英阶层的一项杀手锏，在于他们会为子女预留许多人生止损线：毕不了业可以就业，无心求职给钱创业，开拓业务刷爸妈的脸，就算一事无成，还可以当个列席者。所以精英的后代，人生是被设了下限的，差不到哪里去。</p>
                    <br/><p>下限有限而上不封顶，这就是这群人开挂的地方。何况精英阶层还会以相互之间彼此关照对方子女的方式强化这种机制，关照了别人，也就等于关照了自己，这早已是城堡里的潜规则。与这种大招比起来，那些所谓的“增长视野”、“减少摸索”的好处都只能算毛毛雨。</p>
                    <br/><p>现在主流意识形态开始鼓吹中产阶级的崛起。什么是中产阶级？以专业人士为代表，中产阶级的本质，是精英阶级的随从，是精英分配-酬劳体系中的一环。如果精英是躲在高高的城堡里，中产阶级就是拱卫着城堡的一圈外城。外城依附于城堡，但又优越于再外层的乡野。</p>
                    <br/><p>中产作为城堡的外城，也有自己的城墙。中产阶级的外城墙是学历，而城堡的内城墙是血缘，这是最最核心的区别。如果你注意观察，你就会发现，越上层的人越爱用血缘来区分人，到了最顶层，几乎只认血缘，这种城墙是极高的。中产阶级的城墙比起城堡要矮许多，防御薄弱，所以时不时就有人可以翻进来。</p>
                    <br/><p>中产与底层之间的流通也相对顺畅的多。通过几十年个人奋斗，从底层成功翻墙成为中产的人，很容易得出“个人奋斗能改变阶层”的结论，并把这个结论灌输给下一代。等到下一代想在中产的基础上继续往上爬时，才发现再上面的游戏规则和父亲当年完全不一样了。</p>
                    <br/><br/><img src="http://img.mp.itc.cn/upload/20161104/d208e60eae554ff09d522cde79323223_th.jpg" alt="">
                    <br/><br/><p>不过，这堵城墙依然是有缝隙的。我个人的感觉是，在今天这个时代，平民其实拥有比以往更多的工具来实现阶级跃迁，但前提是你得具有以下三者中的一项：</p>
                    <br/><p>一是“天赋”。有“天赋”的人，我们通常叫“天才”。“天赋”的本质，其实就是基因突变，按人口中的一定比例随机生成，出现地域无法控制，出现时间不可预测。这种不世出的人类天才一旦出山就光芒万丈，再保守的既得利益者也不得不考虑将这些天生异能者收编进城堡之内。有“天赋”者，万中无一，上升难度最易。</p>
                    <br/><p>二是“才华”。我们一般也叫“能人”。而“才华”和“天赋”的区别在于，“才华”不是随机出现的，而是刻意培养的成果。这些“能人”往往是平民阶层举数代人之心力打造的“特优产品”，功能和特点都是为统治阶层精心定制的，用着绝对顺手，包您称心满意。统治阶级看到平民中居然有人这么有心，也往往心生感激，愿意接纳其成为自己一员。有“才华”者，千里挑一，上升较易。</p>
                    <br/><p>三是“美貌”，这个就不用多解释了，占人口比例大概1%左右，可以被上层阶级拿来直接当装饰品或是改善基因用。但因为数量最多，上升的难度要比前两者高好几个数量级。</p>-->
                    <br/><p>以上三大要素，占一个，就有实现阶级跨越的可能；占两个，有实现阶级跨越的较大可能。三个都不沾的，在今天这个时代，还想实现阶层跨越那就只能靠彩票了。需要注意的是，勤奋并不能使人上升到精英序列，勤奋本身只有在和天赋、才华、美貌这三要素相结合的时候才能发挥其助攻作用。单拼勤奋，只能保证你上升到底层阶级中的上层。</p>
                    <br/><br/><img src="https://ww3.sinaimg.cn/bmiddle/87593d7aly1gih8kdg6kjg206y07btun.gif" alt="">
                    <br/><p>天赋、才华、美貌之所以得到精英阶层的承认，是因为这三样东西放在任何群体内都是稀缺资源。我注意到的一个趋势是，这类稀缺资源被优化配置的效率，在今天这个时代正在急速地上升。换言之，怀才不遇的牛人、小村小镇的美女，在未来将越来越难以被埋没，随时随地都会被挖掘出来并往城堡输送。过去因为与外界交流不多而可以娶到自己村里的大美女，这种捡漏的好事以后会越来越不再可能。</p>
                    <br/><p>城堡内的顶层对于这种“受管控的上升通道”其实也乐见其成。毕竟，一者他们需要通过定期小规模换血的方式，来弥补自身的后代里出现废人的概率损耗；二者，城堡内也是很复杂的，城堡内的上层需要通过引入外来跃迁者这个机制，来时不时敲打一下城堡内的对手，甚至不惜打开向下掉落的通道，来警示城堡内的食物链下游。</p>
                    <br/><p>不过，即便是天赋，才华，美貌，其门槛也一直在不断提高。比如苹果创始人之一的沃兹曾经当笑话和人说过：“我看了一下现时在苹果工作需要的经验和教育程度，我想乔布斯和我现在都很难在苹果找到一份工作了。”这就是城堡内的人加高壁垒的一个露骨的范例。</p>
                    <br/><p>平民中的天资平庸者，尽管生活水平会随着技术进步持续上升，但相对的社会位阶却是很难再变化了。但许多人会误把生活水平绝对值的提升，当成自己在人群地位中相对地位的提升。有句鸡汤说“今天一个普通人所拥有的东西，500年前的皇帝会用半壁江山来换”，就是典型的在故意混淆绝对值和相对值的概念。</p>
                    <br/><p>很多人的祖辈在温饱线苦苦挣扎，他们的父辈依然物质匮乏，但他今天却可以顿顿有肉、手机空调，于是就产生了“阶层上升”的错觉。但其实，今天的小白领，从全人口序列中的所处位置看，也就相当于他爷爷辈的一个普通庄稼汉或者他父辈的一个厂里的工人，看似生活水平极大改善，实际阶层位置分毫未动。这就是被精心设计出来的平民幻觉。</p>
                    <br/>现在可以预见的是，在我们这代人乃至我们的下一代的有生之年，只要社会大致稳定，技术持续进步，社会财富不断增加，这套城三重系统便能完美地持续运转，目前看不到有什么可以破坏这个体系。正所谓，国安民乐，岂不美哉？
                </div>
            </van-col>
        </van-row>
        <van-row class="pl10 pr10 mt20" v-show="detailType == 3">
            <van-col span="24">
                <div class="content fc66">
                    <b>（本答案只涉及北京东边区域，西边的北京对我来说就是外国。）</b><br>
                    <br>只推荐平价，TRB这种虽然知道的不算太多也不算太少，但还是以后写在“北京壕餐厅”这样的问题里吧。<br><br>地址请自行大众点评，因为一个个都躲在小巷子里太难找很难说清楚～<br><br><b>1 新新湘菜</b><br><br>工体北路附近。<br><br>人均40到50。<br><br>爱吃辣的要去试试，地方很小比较乱，但是真心好吃。<br><br>工体附近的良心餐馆，家常菜爱好者的福音，毛式红烧肉吃过的都说好，毕竟是挂着毛爷爷的照片烧出来的红烧肉。<br>推荐菜：剁椒荷包蛋，红烧肉，干锅一切系列<br><br>带姑娘约会慎去，不爱吃辣或口味清淡者慎去，环境很简陋，但是我超爱它家的手撕包菜和小炒肉，吃哭了。<br><br><b>2 藏三昧</b><br><br>这个真的太太太深藏不露了。<br>在呼家楼宾馆内，几乎不能不预约就去。路边没有招牌，门在酒店里面，连招牌都不挂，一般只有资深日料爱好者和日本人才找得到的地方。<br><br>
                    <img src="https://pic4.zhimg.com/80/8565a610c4b529bda8b85d6f945ee7f6_720w.jpg?source=1940ef5c" alt="">
                    <br><br>老板和附近比较出名的一藏酒吧似乎是朋友，或者就是一个人。<br>人均100左右，日料算平价，但是真心好吃。<br>季节限定的菜色一定要问老板，一般不写在菜单上。<br>日本老板的中文说的非常好。<br>土豆沙拉必点，炸物必点。<br>地方小，大概四到五张桌子，环境很好，像日本居酒屋的感觉。约妹子去吃也很棒，妹子会忍不住点酒（酒都太可爱了！），然后楼上就是宾馆。<br>去之前一定要预约啊同志们！没有等座的地方！<br/><br/>
                    <img src="https://pic1.zhimg.com/80/2c8872ea2135327868d6563b646f827f_720w.jpg?source=1940ef5c" alt="">
                    <img src="https://pic4.zhimg.com/80/1607d7f35c463c34bf83d3645090b685_720w.jpg?source=1940ef5c" alt="">
                    <br><br>3游—house<br><br>虽然它在五道营胡同，听起来应该属于很出名大家都知道的地方，但是它实在太低调了，你可能从它门口经过了几百次都不会发现它的存在。<br><br>同样是一家日料店，同样是小，同样是不提前去你就傻等着吧。<br>人均100到150。<br><br>
                    <img src="https://pic4.zhimg.com/80/77ece7632a9913f832ff1254d5825f8e_720w.jpg?source=1940ef5c" alt="">
                    <img src="https://pic1.zhimg.com/80/020621a872854988c5ee60ecbc870cf2_720w.jpg?source=1940ef5c" alt="">
                    <br/><br/>和藏三昧不同的是，这家的各种卷类好吃，而且靠近五道营和雍和宫，适合逛累了再去吃饭的一家店。<br><br>藏三昧周围黑灯瞎火毛都没有，打车也到不了只能走路进去，吃完了再去下一个地方。<br><br><br>4京樱<br><br>二十一世纪饭店一层<br><br>也是好难找，搬过家。对面好运街有太多日料店，毕竟是在日本使馆区。<br>这家的特色在吉井忍的《本格料理物语》里有详述。<br>原名“樱心”，二十一世纪这家应该是去年十月份才开张的新店。<br><br>日本夫妻的店，进门口老板会跟你打招呼鞠躬，日本人带客人会去的店。天妇罗，煮物，鳗鱼饭，三文鱼刺身都有，品种较多，其实不算是平价餐馆，300-400的人均价格，也是这个价位该有的餐厅食材口味环境。<br><br>那么，我为什么要推荐在这里呢？<br>因为可以中午去吃套餐呀！套餐的价格可以算是吃到300左右的此店晚餐。（不由为自己的机智点个赞）<br><br>女生单点推荐一：蔬菜丝虾仁天妇罗盖浇饭套餐。75。（无图- -）<br>女生单点推荐二：鳗鱼饭套餐。135.<br>
                    <br><img src="https://pic2.zhimg.com/80/628f48d991188039797e6f38c2164309_720w.jpg?source=1940ef5c" alt="">
                    <p>男生单点推荐：樱花便当。125.（以上价格纯属记忆，可能稍有偏差）</p>
                    <br><img src="https://pic3.zhimg.com/80/5b54f4d9f1bdaff62ceaa703571e5857_720w.jpg?source=1940ef5c" alt="">
                    <br><br>6 铃木食堂<br>（此家似乎稍有争议，谨慎选择，我个人还是很中意的）<br><br>写到这里我才发现自己真的是日料爱好者。这家带好几个朋友去吃，姑娘没有不喜欢的。男生？谁管男生喜欢不喜欢～<br>周末人较多，推荐北新桥地铁站旁边那家。<br>开车或者打车过去位置不好找，推荐地铁，出去后右转就能看见一个小门。<br><br>和风火锅和炸鸡排都很好吃。人均60左右。店里环境非常好，适合恋人约会前往。<br><br>
                    <img src="https://pic4.zhimg.com/80/a3df3bf3e9d5273dcc88153cd63dd506_720w.jpg?source=1940ef5c" alt="">
                    <img src="https://pic1.zhimg.com/80/2a2579e8014c72c3c482a7acc06a65df_720w.jpg?source=1940ef5c" alt="">
                    <br><br>码字中，好累，再写四个就不写了。<br><br>————<br>6月11日，<br><br><br>弃坑，飘走
                </div>
            </van-col>
        </van-row>
        <van-row class="pl10 pr10 mt20" v-show="detailType == 4">
                <van-col span="24">
                    <div class="content fc66">
                        <p><b>本泡面达人激动地张牙舞爪！！！</b></p><p><b>是时候给大伙儿掏出我TOP5的泡面清单了！！</b></p>
                        <img src="https://pic4.zhimg.com/80/v2-99d018e0c28a45ca8854e4612e3c79f4_720w.jpg?source=1940ef5c" alt="">
                        <p><b>温馨提醒：为了维持大家与舍友之间的友好关系，保持相亲相爱、杜绝刀光剑影，不建议在夜深人静时悄咪咪吃以下5款泡面。</b></p>
                        <p><b>TOP 1 杨掌柜高人拉面 单价5-6元</b></p>
                        <img src="https://pic4.zhimg.com/80/v2-0cd147356883184a2a0387fd8d22f729_720w.jpg?source=1940ef5c" alt="">
                        <p>高人拉面真的好好吃啊！亮点在于汤汁，很好喝，很"下面"。而且它的面不是普通的泡面，有点像手工细面，口感比较软，配汤汁很入味</p><p><b>我最爱的口味前三是：浓情番茄味、山椒牛肉味和滋补鲍鱼味~</b></p><p>浓情番茄味的<b>酱料真的是煮烂的番茄酱，能看到番茄肉那种</b>，泡开后是酸酸甜甜的超浓番茄味，配的花生咬一口爆香，很香很脆，想单买来下酒！</p>
                        <br/><img src="https://pic4.zhimg.com/80/v2-f1258a77b90dc211ca47c6ceeab96eba_720w.jpg?source=1940ef5c" alt="">
                        <p><b>TOP2 还是杨掌柜 yes宽粉 单价5-6元</b></p>
                        <br/><img src="https://pic2.zhimg.com/80/v2-233fb30a9330d237008cd9f007ca9810_720w.jpg?source=1940ef5c" alt="">
                        <p>我真的太爱吃酸辣粉了！杨掌柜这款酸味辣味都够劲！弹牙的红薯粉、香脆的花生，配上红彤彤的酸辣汤底，宵夜来一碗真的爽歪歪！</p><p class="ztext-empty-paragraph"><br></p>
                        <p><b>TOP 3 幸运蟹黄面 单价1.2-2元</b></p>
                        <br/><img src="https://pic2.zhimg.com/80/v2-f6c143dd764ee6c9b9b861b037110136_720w.jpg?source=1940ef5c" alt="">
                        <p><b>蟹黄面干吃就是坠牛的！！！</b></p><p>酱料只有一包香油和一包调料包，看似平平无奇，但只要你轻轻捏碎，撒上调味包，抓紧封口摇匀，再把香油倒进去，再摇匀，尝上一口，<b>那种伴着油香、咸香的干脆会让你忍不住吃完一整包！</b></p>
                        <p>泡着吃也好吃啊，油炸过的面爽滑，秘制香油真的是绝杀，宿舍有条件的，还可以搞个鸡蛋、火腿肠或者虾干啥的，妥妥的海鲜面</p>
                        <br/><img src="https://pic2.zhimg.com/80/v2-115faffeb61e06861a6a3ea516313b3c_720w.jpg?source=1940ef5c" alt="">
                        <p><b> TOP 4 华味坊酸汤面片 单价3-5元</b></p>
                        <br/><img src="https://pic4.zhimg.com/80/v2-2a541861b0fbb79cea8600316176b040_720w.jpg?source=1940ef5c" alt="">
                        <p><b>TOP 5 食族人酸辣粉 单价8元</b></p>
                        <br/><img src="https://pic1.zhimg.com/80/v2-5aa9723dbc73c93e12ccdb2b34164036_720w.jpg?source=1940ef5c" alt="">
                        <p>这个除了比普通泡面贵，真的没毛病了。</p><p>红薯粉配酸辣汤简直就是郎才女貌，再加上配的豆皮花生，十分下酒！宵夜嗦一桶，爽歪歪啊，裂墙推荐！</p>
                    </div>
                </van-col>
            </van-row>
            <div class="h70"></div>
            <van-row class="commBot borTop1">
                <van-col span="6" class="hanndleComm tac br1" @click="toTypeHanndle(1)">
                    <van-icon name="like" size="20"/>
                    <p class="mt5 mb5">喜欢&nbsp;6.1万</p>
                </van-col>
                <van-col span="6" class="hanndleComm tac br1" @click="toTypeHanndle(2)">
                    <van-icon name="star" size="20"/>
                    <p class="mt5 mb8">收藏&nbsp;2.4万</p>
                </van-col>
                <van-col span="6" class="hanndleComm tac br1" @touchstart="gtouchstart()" @click="toTypeHanndle(3)" >
                    <van-icon name="chat" size="20"/>
                    <p class="mt5 mb8">评论(999+)</p>
                </van-col>
                <van-col span="6" class="hanndleComm tac br1" @click="toTypeHanndle(4)">
                    <van-icon name="gem" size="20"/>
                    <p class="mt5 mb8">投币&nbsp;369</p>
                </van-col>
            </van-row>
        <van-share-sheet
                v-model:show="showShare"
                title=""
                :options="optionsDownSelect"
                @select="onOpenDownSelect"/>
        <van-popup v-model:show="show"
                   round
                   closeable
                   position="bottom"
                   :style="{ height: '80%' }" />
    </div>
</template>
<script>
    import {
        defineComponent,
        ref,
        watch,
        toRef,
        toRefs,
        reactive,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
    } from 'vue';
    import { useRoute, useRouter } from 'vue-router'
    import { Toast } from 'vant';
    export default defineComponent({
        setup() {
            const route = useRoute();
            const titleName = `${route.query.problemName}`;
            const active = ref(1);
            const titleType = `${route.query.detailType}`;
            const detailType = ref(titleType);
            const toPrve = function(){
                history.back();
            };
            const showShare = ref(false);
            let show = ref(false);
            let baseTouchTime = 0;
            const optionsDownSelect = [
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: 'QQ', icon: 'qq' },
                ]
            ];
            const onOpenDownSelect = (option) => {
                showShare.value = false;
            };
            const toTypeHanndle = (val) => {
                //1:喜欢 2:收藏 3:评论 4:投币
                if(val == 1){
                    Toast('喜欢');
                }
                if(val == 2){
                    Toast('收藏');
                }
                if(val == 3){
                    Toast('评论');
                    show.value = true;
                }
                if(val == 4){
                    Toast('投币');
                }
            };
            const gtouchstart = (val) => {
                baseTouchTime = new Date().getTime();
                console.log("touch start");
            };
            return {
                showShare,
                onOpenDownSelect,
                optionsDownSelect,
                titleName,
                toPrve,
                active,
                gtouchstart,
                toTypeHanndle,
                show,
                detailType
            }
        },

    })
</script>
<style lang="less" scoped>
    :deep .van-icon{
        vertical-align: bottom;
        font-size: 13px;
        margin-top: 3px;
    }
    :deep .van-tabbar-item__text{
        font-size: 13px;
    }
    .hanndleComm{
        color: #646566;
        font-size: 13px;
        cursor: pointer;
    }
    .commBot{
        position: fixed;
        bottom: 0px;
        left:0px;
        right:0px;
        background-color: #ffffff;
    }
    .borTop1{
        border-top:1px solid #f1f1f1;
    }
    .mb8{
        margin-bottom: 8px;
    }
    .br1{
        border-right: 1px solid #f1f1f1;
    }
    .content img{
        width:100%;
    }
    .content p{
        margin-top:10px;
    }
    .content p:first-child{
        margin-top:0px;
    }
    .moreHanndle{
        font-size: 24px;
        color: #999;
    }
    .editFeedfack{
        font-size: 20px;
        color: #0066ff;
    }
    .editTxt{
        font-size: 12px;
        font-weight: 700;
        color: #0066ff;
    }
    .titleEplice{
        text-align: left;
        width:210px;
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
    }

</style>
