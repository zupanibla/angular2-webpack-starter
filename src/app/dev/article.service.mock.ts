import { Injectable } from '@angular/core';

import { Article } from './../shared/structures/article.structure';
import { Set } from './../shared/utils/set.util';
import { HashMap } from './../shared/utils/hash-map.util';

@Injectable()
export class MockArticleService {
	public currentArticle: Article = {
		template: "\n\n<!--StartFragment--><div class=\"fusion-flexslider flexslider post-slideshow fusion-post-slideshow\" style=\"box-sizing: border-box; margin: 0px 0px 30px; padding: 0px; position: relative; overflow: visible; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; line-height: 21px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><ul class=\"slides\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; z-index: 100; overflow: hidden;\"><li class=\"flex-active-slide\" style=\"box-sizing: border-box; display: block; backface-visibility: hidden; width: 706.531px; float: left; margin-right: -706.531px; position: relative; opacity: 1; z-index: 2;\"><br class=\"Apple-interchange-newline\"><img src=\"http://lph5i1b6c053kq7us26bdk75.wpengine.netdna-cdn.com/wp-content/uploads/2012/12/facts-about-ducks-709x386.jpg\" srcset=\"http://www.thefactsite.com/wp-content/uploads/2012/12/facts-about-ducks-709x386.jpg 1x, http://www.thefactsite.com/wp-content/uploads/2012/12/facts-about-ducks-709x386@2x.jpg 2x\" alt=\"Facts About Ducks\" role=\"presentation\" draggable=\"false\" style=\"box-sizing: border-box; border-style: none; vertical-align: top; max-width: 100%; height: auto; width: 706.531px; display: block; -webkit-user-select: none;\"></li></ul><ol class=\"flex-control-nav flex-control-paging\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; z-index: 100; width: 706.531px; position: absolute; bottom: 0px; text-align: center;\"></ol><ul class=\"flex-direction-nav\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; z-index: 100; height: 0px;\"><li style=\"box-sizing: border-box;\"></li><li style=\"box-sizing: border-box;\"></li></ul></div><div class=\"post-content\" style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; line-height: 21px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><span id=\"ezoic-pub-ad-placeholder-101\" style=\"box-sizing: border-box;\"></span><p style=\"box-sizing: border-box; margin: 0px 0px 20px;\"><span data-word=\"Ducks\" data-word-id=\"0\">Ducks</span> <span data-word=\"may\" data-word-id=\"1\">may</span> <span data-word=\"the\" data-word-id=\"2\">the</span> <span data-word=\"more\" data-word-id=\"3\">more</span> <span data-word=\"familiar\" data-word-id=\"4\">familiar</span> <span data-word=\"birds\" data-word-id=\"5\">birds</span> <span data-word=\"known\" data-word-id=\"6\">known</span> <span data-word=\"to\" data-word-id=\"7\">to</span> <span data-word=\"us\" data-word-id=\"8\">us</span>, <span data-word=\"but\" data-word-id=\"9\">but</span> <span data-word=\"if\" data-word-id=\"10\">if</span> <span data-word=\"you\" data-word-id=\"11\">you</span> <span data-word=\"think\" data-word-id=\"12\">think</span> <span data-word=\"about\" data-word-id=\"13\">about</span> <span data-word=\"it\" data-word-id=\"14\">it</span>, <span data-word=\"what\" data-word-id=\"15\">what</span> <span data-word=\"facts\" data-word-id=\"16\">facts</span> <span data-word=\"do\" data-word-id=\"17\">do</span> <span data-word=\"we\" data-word-id=\"18\">we</span> <span data-word=\"actually\" data-word-id=\"19\">actually</span> <span data-word=\"know\" data-word-id=\"20\">know</span> <span data-word=\"about\" data-word-id=\"21\">about</span> <span data-word=\"ducks\" data-word-id=\"22\">ducks</span>? <span data-word=\"Find\" data-word-id=\"23\">Find</span> <span data-word=\"out\" data-word-id=\"24\">out</span> <span data-word=\"here\" data-word-id=\"25\">here</span>!<span id=\"ezoic-pub-ad-placeholder-115\" class=\"ezoic-adpicker-ad\" data-ezadpicker=\"115\" data-ez-position-type=\"under_second_paragraph\" style=\"box-sizing: border-box;\"></span></p><ol style=\"box-sizing: border-box;\"><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Ducks\" data-word-id=\"26\">Ducks</span> <span data-word=\"feet\" data-word-id=\"27\">feet</span> <span data-word=\"has\" data-word-id=\"28\">has</span> <span data-word=\"no\" data-word-id=\"29\">no</span> <span data-word=\"nerves\" data-word-id=\"30\">nerves</span> <span data-word=\"or\" data-word-id=\"31\">or</span> <span data-word=\"blood\" data-word-id=\"32\">blood</span> <span data-word=\"vessels\" data-word-id=\"33\">vessels</span>, <span data-word=\"meaning\" data-word-id=\"34\">meaning</span> <span data-word=\"that\" data-word-id=\"35\">that</span> <span data-word=\"their\" data-word-id=\"36\">their</span> <span data-word=\"feet\" data-word-id=\"37\">feet</span> <span data-word=\"do\" data-word-id=\"38\">do</span> <span data-word=\"not\" data-word-id=\"39\">not</span> <span data-word=\"feel\" data-word-id=\"40\">feel</span> <span data-word=\"the\" data-word-id=\"41\">the</span> <span data-word=\"cold\" data-word-id=\"42\">cold</span>! <span data-word=\"This\" data-word-id=\"43\">This</span> <span data-word=\"enables\" data-word-id=\"44\">enables</span> <span data-word=\"ducks\" data-word-id=\"45\">ducks</span> <span data-word=\"to\" data-word-id=\"46\">to</span> <span data-word=\"swim\" data-word-id=\"47\">swim</span> <span data-word=\"in\" data-word-id=\"48\">in</span> <span data-word=\"icy\" data-word-id=\"49\">icy</span> <span data-word=\"water\" data-word-id=\"50\">water</span>, <span data-word=\"and\" data-word-id=\"51\">and</span> <span data-word=\"walk\" data-word-id=\"52\">walk</span> <span data-word=\"in\" data-word-id=\"53\">in</span> <span data-word=\"ice\" data-word-id=\"54\">ice</span> <span data-word=\"and\" data-word-id=\"55\">and</span> <span data-word=\"snow\" data-word-id=\"56\">snow</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Male\" data-word-id=\"57\">Male</span> <span data-word=\"ducks\" data-word-id=\"58\">ducks</span> <span data-word=\"are\" data-word-id=\"59\">are</span> <span data-word=\"called\" data-word-id=\"60\">called</span><span class=\"Apple-converted-space\">&nbsp;</span><i style=\"box-sizing: border-box;\"><span data-word=\"Drakes\" data-word-id=\"61\">Drakes</span></i>, <span data-word=\"females\" data-word-id=\"62\">females</span> <span data-word=\"are\" data-word-id=\"63\">are</span> <span data-word=\"called\" data-word-id=\"64\">called</span><span class=\"Apple-converted-space\">&nbsp;</span><i style=\"box-sizing: border-box;\"><span data-word=\"Hens\" data-word-id=\"65\">Hens</span></i>, <span data-word=\"and\" data-word-id=\"66\">and</span> <span data-word=\"baby\" data-word-id=\"67\">baby</span> <span data-word=\"ducks\" data-word-id=\"68\">ducks</span> <span data-word=\"are\" data-word-id=\"69\">are</span> <span data-word=\"known\" data-word-id=\"70\">known</span> <span data-word=\"as\" data-word-id=\"71\">as</span><span class=\"Apple-converted-space\">&nbsp;</span><i style=\"box-sizing: border-box;\"><span data-word=\"Ducklings\" data-word-id=\"72\">Ducklings</span></i>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><a title=\"Does a ducks quack echo?\" href=\"http://www.thefactsite.com/2009/01/ducks-quack-does-echo.html\" style=\"box-sizing: border-box; text-decoration: none; color: rgb(86, 143, 204);\"><span data-word=\"A\" data-word-id=\"73\">A</span> <span data-word=\"ducks\" data-word-id=\"74\">ducks</span> <span data-word=\"quack\" data-word-id=\"75\">quack</span> <span data-word=\"does\" data-word-id=\"76\">does</span> <span data-word=\"echo\" data-word-id=\"77\">echo</span></a>!</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"There\" data-word-id=\"78\">There</span> <span data-word=\"are\" data-word-id=\"79\">are</span> <span data-word=\"around\" data-word-id=\"80\">around</span> 40 <span data-word=\"breeds\" data-word-id=\"81\">breeds</span> <span data-word=\"of\" data-word-id=\"82\">of</span> <span data-word=\"domestic\" data-word-id=\"83\">domestic</span> <span data-word=\"ducks\" data-word-id=\"84\">ducks</span>, <span data-word=\"with\" data-word-id=\"85\">with</span> <span data-word=\"the\" data-word-id=\"86\">the</span> <span data-word=\"most\" data-word-id=\"87\">most</span> <span data-word=\"popular\" data-word-id=\"88\">popular</span> <span data-word=\"being\" data-word-id=\"89\">being</span> <span data-word=\"the\" data-word-id=\"90\">the</span> <span data-word=\"White\" data-word-id=\"91\">White</span> <span data-word=\"Pekin\" data-word-id=\"92\">Pekin</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"A\" data-word-id=\"93\">A</span> <span data-word=\"Red-Breasted\" data-word-id=\"94\">Red-Breasted</span> <span data-word=\"Merganser\" data-word-id=\"95\">Merganser</span> <span data-word=\"was\" data-word-id=\"96\">was</span> <span data-word=\"once\" data-word-id=\"97\">once</span> <span data-word=\"recorded\" data-word-id=\"98\">recorded</span> <span data-word=\"flying\" data-word-id=\"99\">flying</span> <span data-word=\"at\" data-word-id=\"100\">at</span> <span data-word=\"just\" data-word-id=\"101\">just</span> <span data-word=\"over\" data-word-id=\"102\">over</span> 100 <span data-word=\"miles\" data-word-id=\"103\">miles</span> <span data-word=\"per\" data-word-id=\"104\">per</span> <span data-word=\"hour\" data-word-id=\"105\">hour</span>, <span data-word=\"whilst\" data-word-id=\"106\">whilst</span> <span data-word=\"being\" data-word-id=\"107\">being</span> <span data-word=\"pursued\" data-word-id=\"108\">pursued</span> <span data-word=\"by\" data-word-id=\"109\">by</span> <span data-word=\"a\" data-word-id=\"110\">a</span> <span data-word=\"plane\" data-word-id=\"111\">plane</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Ducks\" data-word-id=\"112\">Ducks</span> <span data-word=\"normally\" data-word-id=\"113\">normally</span> <span data-word=\"migrate\" data-word-id=\"114\">migrate</span> <span data-word=\"between\" data-word-id=\"115\">between</span> 200 <span data-word=\"and\" data-word-id=\"116\">and</span> 4,000 <span data-word=\"feet\" data-word-id=\"117\">feet</span> <span data-word=\"in\" data-word-id=\"118\">in</span> <span data-word=\"the\" data-word-id=\"119\">the</span> <span data-word=\"air\" data-word-id=\"120\">air</span>, <span data-word=\"but\" data-word-id=\"121\">but</span> <span data-word=\"are\" data-word-id=\"122\">are</span> <span data-word=\"capable\" data-word-id=\"123\">capable</span> <span data-word=\"of\" data-word-id=\"124\">of</span> <span data-word=\"reaching\" data-word-id=\"125\">reaching</span> <span data-word=\"far\" data-word-id=\"126\">far</span> <span data-word=\"greater\" data-word-id=\"127\">greater</span> <span data-word=\"heights\" data-word-id=\"128\">heights</span>. <span data-word=\"A\" data-word-id=\"129\">A</span> <span data-word=\"jet\" data-word-id=\"130\">jet</span> <span data-word=\"plane\" data-word-id=\"131\">plane</span> <span data-word=\"over\" data-word-id=\"132\">over</span> <span data-word=\"Nevada\" data-word-id=\"133\">Nevada</span> <span data-word=\"once\" data-word-id=\"134\">once</span> <span data-word=\"struck\" data-word-id=\"135\">struck</span> <span data-word=\"a\" data-word-id=\"136\">a</span> <span data-word=\"Mallard\" data-word-id=\"137\">Mallard</span> <span data-word=\"at\" data-word-id=\"138\">at</span> <span data-word=\"an\" data-word-id=\"139\">an</span> <span data-word=\"altitude\" data-word-id=\"140\">altitude</span> <span data-word=\"of\" data-word-id=\"141\">of</span> 21,000 <span data-word=\"feet\" data-word-id=\"142\">feet</span>! <span data-word=\"This\" data-word-id=\"143\">This</span> <span data-word=\"is\" data-word-id=\"144\">is</span> <span data-word=\"currently\" data-word-id=\"145\">currently</span> <span data-word=\"the\" data-word-id=\"146\">the</span> <span data-word=\"highest\" data-word-id=\"147\">highest</span> <span data-word=\"recorded\" data-word-id=\"148\">recorded</span> <span data-word=\"flight\" data-word-id=\"149\">flight</span> <span data-word=\"of\" data-word-id=\"150\">of</span> <span data-word=\"any\" data-word-id=\"151\">any</span> <span data-word=\"duck\" data-word-id=\"152\">duck</span>!</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Depending\" data-word-id=\"153\">Depending</span> <span data-word=\"on\" data-word-id=\"154\">on</span> <span data-word=\"the\" data-word-id=\"155\">the</span> <span data-word=\"species\" data-word-id=\"156\">species</span>, <span data-word=\"a\" data-word-id=\"157\">a</span> <span data-word=\"duck\" data-word-id=\"158\">duck</span> <span data-word=\"can\" data-word-id=\"159\">can</span> <span data-word=\"live\" data-word-id=\"160\">live</span> <span data-word=\"between\" data-word-id=\"161\">between</span> 2 <span data-word=\"and\" data-word-id=\"162\">and</span> 12 <span data-word=\"years\" data-word-id=\"163\">years</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Ducks\" data-word-id=\"164\">Ducks</span> <span data-word=\"have\" data-word-id=\"165\">have</span> <span data-word=\"webbed\" data-word-id=\"166\">webbed</span> <span data-word=\"feet\" data-word-id=\"167\">feet</span>, <span data-word=\"acting\" data-word-id=\"168\">acting</span> <span data-word=\"like\" data-word-id=\"169\">like</span> <span data-word=\"peddles\" data-word-id=\"170\">peddles</span> <span data-word=\"under\" data-word-id=\"171\">under</span> <span data-word=\"the\" data-word-id=\"172\">the</span> <span data-word=\"water\" data-word-id=\"173\">water</span>. <span data-word=\"This\" data-word-id=\"174\">This</span> <span data-word=\"is\" data-word-id=\"175\">is</span> <span data-word=\"what\" data-word-id=\"176\">what</span> <span data-word=\"makes\" data-word-id=\"177\">makes</span> <span data-word=\"them\" data-word-id=\"178\">them</span> <span data-word=\"such\" data-word-id=\"179\">such</span> <span data-word=\"good\" data-word-id=\"180\">good</span> <span data-word=\"swimmers\" data-word-id=\"181\">swimmers</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"Ducks\" data-word-id=\"182\">Ducks</span> <span data-word=\"have\" data-word-id=\"183\">have</span> <span data-word=\"three\" data-word-id=\"184\">three</span> <span data-word=\"eyelids\" data-word-id=\"185\">eyelids</span>!</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"The\" data-word-id=\"186\">The</span> <span data-word=\"feathers\" data-word-id=\"187\">feathers</span> <span data-word=\"on\" data-word-id=\"188\">on</span> <span data-word=\"a\" data-word-id=\"189\">a</span> <span data-word=\"ducks\" data-word-id=\"190\">ducks</span> <span data-word=\"back\" data-word-id=\"191\">back</span> <span data-word=\"are\" data-word-id=\"192\">are</span> <span data-word=\"waterproof\" data-word-id=\"193\">waterproof</span>.</li><li style=\"box-sizing: border-box; padding: 2px 0px 3px; margin-left: -15px;\"><span data-word=\"The\" data-word-id=\"194\">The</span> <span data-word=\"two\" data-word-id=\"195\">two</span> <span data-word=\"most\" data-word-id=\"196\">most</span> <span data-word=\"famous\" data-word-id=\"197\">famous</span> <span data-word=\"ducks\" data-word-id=\"198\">ducks</span> <span data-word=\"in\" data-word-id=\"199\">in</span> <span data-word=\"history\" data-word-id=\"200\">history</span> <span data-word=\"are\" data-word-id=\"201\">are</span> <span data-word=\"Donald\" data-word-id=\"202\">Donald</span> <span data-word=\"and\" data-word-id=\"203\">and</span> <span data-word=\"Daffy\" data-word-id=\"204\">Daffy</span> <span data-word=\"Duck\" data-word-id=\"205\">Duck</span>.</li></ol></div><!--EndFragment-->\n\n",
		markedWordsIds: new Set(),
		wordDefinitions: [{"query":"Ducks","wordNumber":0,"definitionNumber":0},{"query":"may","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"more","wordNumber":0,"definitionNumber":0},{"query":"familiar","wordNumber":0,"definitionNumber":0},{"query":"birds","wordNumber":0,"definitionNumber":0},{"query":"known","wordNumber":0,"definitionNumber":0},{"query":"to","wordNumber":0,"definitionNumber":0},{"query":"us","wordNumber":0,"definitionNumber":0},{"query":"but","wordNumber":0,"definitionNumber":0},{"query":"if","wordNumber":0,"definitionNumber":0},{"query":"you","wordNumber":0,"definitionNumber":0},{"query":"think","wordNumber":0,"definitionNumber":0},{"query":"about","wordNumber":0,"definitionNumber":0},{"query":"it","wordNumber":0,"definitionNumber":0},{"query":"what","wordNumber":0,"definitionNumber":0},{"query":"facts","wordNumber":0,"definitionNumber":0},{"query":"do","wordNumber":0,"definitionNumber":0},{"query":"we","wordNumber":0,"definitionNumber":0},{"query":"actually","wordNumber":0,"definitionNumber":0},{"query":"know","wordNumber":0,"definitionNumber":0},{"query":"about","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"Find","wordNumber":0,"definitionNumber":0},{"query":"out","wordNumber":0,"definitionNumber":0},{"query":"here","wordNumber":0,"definitionNumber":0},{"query":"Ducks","wordNumber":0,"definitionNumber":0},{"query":"feet","wordNumber":0,"definitionNumber":0},{"query":"has","wordNumber":0,"definitionNumber":0},{"query":"no","wordNumber":0,"definitionNumber":0},{"query":"nerves","wordNumber":0,"definitionNumber":0},{"query":"or","wordNumber":0,"definitionNumber":0},{"query":"blood","wordNumber":0,"definitionNumber":0},{"query":"vessels","wordNumber":0,"definitionNumber":0},{"query":"meaning","wordNumber":0,"definitionNumber":0},{"query":"that","wordNumber":0,"definitionNumber":0},{"query":"their","wordNumber":0,"definitionNumber":0},{"query":"feet","wordNumber":0,"definitionNumber":0},{"query":"do","wordNumber":0,"definitionNumber":0},{"query":"not","wordNumber":0,"definitionNumber":0},{"query":"feel","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"cold","wordNumber":0,"definitionNumber":0},{"query":"This","wordNumber":0,"definitionNumber":0},{"query":"enables","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"to","wordNumber":0,"definitionNumber":0},{"query":"swim","wordNumber":0,"definitionNumber":0},{"query":"in","wordNumber":0,"definitionNumber":0},{"query":"icy","wordNumber":0,"definitionNumber":0},{"query":"water","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"walk","wordNumber":0,"definitionNumber":0},{"query":"in","wordNumber":0,"definitionNumber":0},{"query":"ice","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"snow","wordNumber":0,"definitionNumber":0},{"query":"Male","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"called","wordNumber":0,"definitionNumber":0},{"query":"Drakes","wordNumber":0,"definitionNumber":0},{"query":"females","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"called","wordNumber":0,"definitionNumber":0},{"query":"Hens","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"baby","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"known","wordNumber":0,"definitionNumber":0},{"query":"as","wordNumber":0,"definitionNumber":0},{"query":"Ducklings","wordNumber":0,"definitionNumber":0},{"query":"A","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"quack","wordNumber":0,"definitionNumber":0},{"query":"does","wordNumber":0,"definitionNumber":0},{"query":"echo","wordNumber":0,"definitionNumber":0},{"query":"There","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"around","wordNumber":0,"definitionNumber":0},{"query":"breeds","wordNumber":0,"definitionNumber":0},{"query":"of","wordNumber":0,"definitionNumber":0},{"query":"domestic","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"with","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"most","wordNumber":0,"definitionNumber":0},{"query":"popular","wordNumber":0,"definitionNumber":0},{"query":"being","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"White","wordNumber":0,"definitionNumber":0},{"query":"Pekin","wordNumber":0,"definitionNumber":0},{"query":"A","wordNumber":0,"definitionNumber":0},{"query":"Red-Breasted","wordNumber":0,"definitionNumber":0},{"query":"Merganser","wordNumber":0,"definitionNumber":0},{"query":"was","wordNumber":0,"definitionNumber":0},{"query":"once","wordNumber":0,"definitionNumber":0},{"query":"recorded","wordNumber":0,"definitionNumber":0},{"query":"flying","wordNumber":0,"definitionNumber":0},{"query":"at","wordNumber":0,"definitionNumber":0},{"query":"just","wordNumber":0,"definitionNumber":0},{"query":"over","wordNumber":0,"definitionNumber":0},{"query":"miles","wordNumber":0,"definitionNumber":0},{"query":"per","wordNumber":0,"definitionNumber":0},{"query":"hour","wordNumber":0,"definitionNumber":0},{"query":"whilst","wordNumber":0,"definitionNumber":0},{"query":"being","wordNumber":0,"definitionNumber":0},{"query":"pursued","wordNumber":0,"definitionNumber":0},{"query":"by","wordNumber":0,"definitionNumber":0},{"query":"a","wordNumber":0,"definitionNumber":0},{"query":"plane","wordNumber":0,"definitionNumber":0},{"query":"Ducks","wordNumber":0,"definitionNumber":0},{"query":"normally","wordNumber":0,"definitionNumber":0},{"query":"migrate","wordNumber":0,"definitionNumber":0},{"query":"between","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"feet","wordNumber":0,"definitionNumber":0},{"query":"in","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"air","wordNumber":0,"definitionNumber":0},{"query":"but","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"capable","wordNumber":0,"definitionNumber":0},{"query":"of","wordNumber":0,"definitionNumber":0},{"query":"reaching","wordNumber":0,"definitionNumber":0},{"query":"far","wordNumber":0,"definitionNumber":0},{"query":"greater","wordNumber":0,"definitionNumber":0},{"query":"heights","wordNumber":0,"definitionNumber":0},{"query":"A","wordNumber":0,"definitionNumber":0},{"query":"jet","wordNumber":0,"definitionNumber":0},{"query":"plane","wordNumber":0,"definitionNumber":0},{"query":"over","wordNumber":0,"definitionNumber":0},{"query":"Nevada","wordNumber":0,"definitionNumber":0},{"query":"once","wordNumber":0,"definitionNumber":0},{"query":"struck","wordNumber":0,"definitionNumber":0},{"query":"a","wordNumber":0,"definitionNumber":0},{"query":"Mallard","wordNumber":0,"definitionNumber":0},{"query":"at","wordNumber":0,"definitionNumber":0},{"query":"an","wordNumber":0,"definitionNumber":0},{"query":"altitude","wordNumber":0,"definitionNumber":0},{"query":"of","wordNumber":0,"definitionNumber":0},{"query":"feet","wordNumber":0,"definitionNumber":0},{"query":"This","wordNumber":0,"definitionNumber":0},{"query":"is","wordNumber":0,"definitionNumber":0},{"query":"currently","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"highest","wordNumber":0,"definitionNumber":0},{"query":"recorded","wordNumber":0,"definitionNumber":0},{"query":"flight","wordNumber":0,"definitionNumber":0},{"query":"of","wordNumber":0,"definitionNumber":0},{"query":"any","wordNumber":0,"definitionNumber":0},{"query":"duck","wordNumber":0,"definitionNumber":0},{"query":"Depending","wordNumber":0,"definitionNumber":0},{"query":"on","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"species","wordNumber":0,"definitionNumber":0},{"query":"a","wordNumber":0,"definitionNumber":0},{"query":"duck","wordNumber":0,"definitionNumber":0},{"query":"can","wordNumber":0,"definitionNumber":0},{"query":"live","wordNumber":0,"definitionNumber":0},{"query":"between","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"years","wordNumber":0,"definitionNumber":0},{"query":"Ducks","wordNumber":0,"definitionNumber":0},{"query":"have","wordNumber":0,"definitionNumber":0},{"query":"webbed","wordNumber":0,"definitionNumber":0},{"query":"feet","wordNumber":0,"definitionNumber":0},{"query":"acting","wordNumber":0,"definitionNumber":0},{"query":"like","wordNumber":0,"definitionNumber":0},{"query":"peddles","wordNumber":0,"definitionNumber":0},{"query":"under","wordNumber":0,"definitionNumber":0},{"query":"the","wordNumber":0,"definitionNumber":0},{"query":"water","wordNumber":0,"definitionNumber":0},{"query":"This","wordNumber":0,"definitionNumber":0},{"query":"is","wordNumber":0,"definitionNumber":0},{"query":"what","wordNumber":0,"definitionNumber":0},{"query":"makes","wordNumber":0,"definitionNumber":0},{"query":"them","wordNumber":0,"definitionNumber":0},{"query":"such","wordNumber":0,"definitionNumber":0},{"query":"good","wordNumber":0,"definitionNumber":0},{"query":"swimmers","wordNumber":0,"definitionNumber":0},{"query":"Ducks","wordNumber":0,"definitionNumber":0},{"query":"have","wordNumber":0,"definitionNumber":0},{"query":"three","wordNumber":0,"definitionNumber":0},{"query":"eyelids","wordNumber":0,"definitionNumber":0},{"query":"The","wordNumber":0,"definitionNumber":0},{"query":"feathers","wordNumber":0,"definitionNumber":0},{"query":"on","wordNumber":0,"definitionNumber":0},{"query":"a","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"back","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"waterproof","wordNumber":0,"definitionNumber":0},{"query":"The","wordNumber":0,"definitionNumber":0},{"query":"two","wordNumber":0,"definitionNumber":0},{"query":"most","wordNumber":0,"definitionNumber":0},{"query":"famous","wordNumber":0,"definitionNumber":0},{"query":"ducks","wordNumber":0,"definitionNumber":0},{"query":"in","wordNumber":0,"definitionNumber":0},{"query":"history","wordNumber":0,"definitionNumber":0},{"query":"are","wordNumber":0,"definitionNumber":0},{"query":"Donald","wordNumber":0,"definitionNumber":0},{"query":"and","wordNumber":0,"definitionNumber":0},{"query":"Daffy","wordNumber":0,"definitionNumber":0},{"query":"Duck","wordNumber":0,"definitionNumber":0}],
	}
}
