const domains = [
  "https://0755.qq.com",
  "https://1000.qq.com",
  "https://0.qq.com",
  "https://021.qq.com",
  "https://dp.108.qq.com",
  "https://pick.101.qq.com",
  "https://test1.game.108.qq.com",
  "https://100.qq.com",
  "https://0919.qq.com",
  "https://m.108.qq.com",
  "https://i.108.qq.com",
  "https://test1.msg.108.qq.com",
  "https://03.qq.com",
  "https://test1.pcl.108.qq.com",
  "https://10years.qq.com",
  "https://1111.qq.com",
  "https://game.108.qq.com",
  "https://test1.res.108.qq.com",
  "https://pcl.108.qq.com",
  "https://msg.108.qq.com",
  "https://1.qq.com",
  "https://2853518960.114.qq.com",
  "https://4000005784.114.qq.com",
  "https://4000001273.114.qq.com",
  "https://3001032699.114.qq.com",
  "https://4000000271.114.qq.com",
  "https://4000010080.114.qq.com",
  "https://110.qq.com",
  "https://4000009152.114.qq.com",
  "https://4000016682.114.qq.com",
  "https://4000017854.114.qq.com",
  "https://4000168488.114.qq.com",
  "https://www.4000106688.114.qq.com",
  "https://4000112575.114.qq.com",
  "https://4000333878.114.qq.com",
  "https://4000215150.114.qq.com",
  "https://4000301558.114.qq.com",
  "https://4000298887.114.qq.com",
  "https://4000331112.114.qq.com",
  "https://4000388636.114.qq.com",
  "https://4000559773.114.qq.com",
  "https://4000440048.114.qq.com",
  "https://4000365217.114.qq.com",
  "https://4000477120.114.qq.com",
  "https://4000517940.114.qq.com",
  "https://4000681917.114.qq.com",
  "https://4000520199.114.qq.com",
  "https://4000585369.114.qq.com",
  "https://4000539293.114.qq.com",
  "https://4000688880.114.qq.com",
  "https://4000669609.114.qq.com",
  "https://4000908909.114.qq.com",
  "https://4000720588.114.qq.com",
  "https://4001582233.114.qq.com",
  "https://4000909149.114.qq.com",
  "https://4000929998.114.qq.com",
  "https://4001161115.114.qq.com",
  "https://4000732258.114.qq.com",
  "https://4001805100antivirus.114.qq.com",
  "https://4001680303.114.qq.com",
  "https://4006003434.114.qq.com",
  "https://4002025174.114.qq.com",
  "https://4001889333.114.qq.com",
  "https://4006005438.114.qq.com",
  "https://4001882202.114.qq.com",
  "https://4006030539.114.qq.com",
  "https://4006008062.114.qq.com",
  "https://4006011727.114.qq.com",
  "https://4006051091.114.qq.com",
  "https://4006065858.114.qq.com",
  "https://4006057898.114.qq.com",
  "https://4006076895.114.qq.com",
  "https://4006246768.114.qq.com",
  "https://4006171178.114.qq.com",
  "https://4006060029.114.qq.com",
  "https://4006106111.114.qq.com",
  "https://4006080503.114.qq.com",
  "https://4006283825.114.qq.com",
  "https://4006099400-antivirus.114.qq.com",
  "https://4006458828.114.qq.com",
  "https://4006323066.114.qq.com",
  "https://4006338233.114.qq.com",
  "https://4006358225.114.qq.com",
  "https://4006566156.114.qq.com",
  "https://4006289800.114.qq.com",
  "https://4006602400.114.qq.com",
  "https://4006340053.114.qq.com",
  "https://4006421314.114.qq.com",
  "https://4006612002.114.qq.com",
  "https://4006667632.114.qq.com",
  "https://4006518177.114.qq.com",
  "https://4006627782.114.qq.com",
  "https://4006681680.114.qq.com",
  "https://4006685539.114.qq.com",
  "https://4006688282.114.qq.com",
  "https://4006662402.114.qq.com",
  "https://4006644993.114.qq.com",
  "https://4006803696.114.qq.com",
  "https://4006709090.114.qq.com",
  "https://4006778641.114.qq.com",
  "https://4007160816.114.qq.com",
  "https://4006900120.114.qq.com",
  "https://4007366118.114.qq.com",
  "https://4008014120.114.qq.com",
  "https://4008001413.114.qq.com",
  "https://4008036002.114.qq.com",
  "https://4008000291.114.qq.com",
  "https://4006888130.114.qq.com",
  "https://4008081240.114.qq.com",
  "https://4008082216.114.qq.com",
  "https://4008074577.114.qq.com",
  "https://4008101900.114.qq.com",
  "https://4008205400.114.qq.com",
  "https://4008205101.114.qq.com",
  "https://4008605859.114.qq.com",
  "https://4008567139.114.qq.com",
  "https://4008203622.114.qq.com",
  "https://4008675665.114.qq.com",
  "https://4008768488.114.qq.com",
  "https://4008774777.114.qq.com",
  "https://4008778001.114.qq.com",
  "https://4008118909.114.qq.com",
  "https://4008308299.114.qq.com",
  "https://4008800762.114.qq.com",
  "https://4008818655.114.qq.com",
  "https://4008842525.114.qq.com",
  "https://4008888366.114.qq.com",
  "https://4008871739.114.qq.com",
  "https://4008888208.114.qq.com",
  "https://4008951555.114.qq.com",
  "https://4008885917.114.qq.com",
  "https://4008996161.114.qq.com",
  "https://4009980051.114.qq.com",
  "https://4009610508.114.qq.com",
  "https://4009920992.114.qq.com",
  "https://800000705.114.qq.com",
  "https://457018745.114.qq.com",
  "https://4009990592.114.qq.com",
  "https://611968310.114.qq.com",
  "https://800001044.114.qq.com",
  "https://800001993.114.qq.com",
  "https://4009997969.114.qq.com",
  "https://800001539.114.qq.com",
  "https://800001417.114.qq.com",
  "https://800002113.114.qq.com",
  "https://800002558.114.qq.com",
  "https://800002864.114.qq.com",
  "https://800001082.114.qq.com",
  "https://800003030.114.qq.com",
  "https://800002356.114.qq.com",
  "https://800003931.114.qq.com",
  "https://800003239.114.qq.com",
  "https://800003290.114.qq.com",
  "https://800004018.114.qq.com",
  "https://800005210.114.qq.com",
  "https://800005066.114.qq.com",
  "https://800005219.114.qq.com",
  "https://800004196.114.qq.com",
  "https://800005102.114.qq.com",
  "https://800003517.114.qq.com",
  "https://800003671.114.qq.com",
  "https://800005736.114.qq.com",
  "https://800006691.114.qq.com",
  "https://800007839.114.qq.com",
  "https://800005877.114.qq.com",
  "https://800007879.114.qq.com",
  "https://800009608.114.qq.com",
  "https://800006861.114.qq.com",
  "https://800008200antivirus.114.qq.com",
  "https://800009636.114.qq.com",
  "https://800013255.114.qq.com",
  "https://800008505.114.qq.com",
  "https://800010089.114.qq.com",
  "https://800013301.114.qq.com",
  "https://800014008.114.qq.com",
  "https://800015423.114.qq.com",
  "https://800015611.114.qq.com",
  "https://800015675.114.qq.com",
  "https://800014188.114.qq.com",
  "https://800015523.114.qq.com",
  "https://800015671.114.qq.com",
  "https://800015258.114.qq.com",
  "https://800013874.114.qq.com",
  "https://800016279.114.qq.com",
  "https://800015941.114.qq.com",
  "https://800019685.114.qq.com",
  "https://800016630.114.qq.com",
  "https://800019977.114.qq.com",
  "https://800019988.114.qq.com",
  "https://800020211.114.qq.com",
  "https://800020267.114.qq.com",
  "https://800017210.114.qq.com",
  "https://800019659.114.qq.com",
  "https://800017717.114.qq.com",
  "https://800016919.114.qq.com",
  "https://800021779.114.qq.com",
  "https://800024075.114.qq.com",
  "https://800022224.114.qq.com",
  "https://800020033.114.qq.com",
  "https://800026410.114.qq.com",
  "https://800029499.114.qq.com",
  "https://800024856.114.qq.com",
  "https://800029610.114.qq.com",
  "https://800029961.114.qq.com",
  "https://800028879.114.qq.com",
  "https://800026766.114.qq.com",
  "https://800025975.114.qq.com",
  "https://800030920.114.qq.com",
  "https://800032817.114.qq.com",
  "https://800034995.114.qq.com",
  "https://800033814.114.qq.com",
  "https://800036126.114.qq.com",
  "https://800036056.114.qq.com",
  "https://800039738.114.qq.com",
  "https://800036017.114.qq.com",
  "https://800040211.114.qq.com",
  "https://800038797.114.qq.com",
  "https://800045900.114.qq.com",
  "https://800050187.114.qq.com",
  "https://800047083.114.qq.com",
  "https://800050087.114.qq.com",
  "https://800053400.114.qq.com",
  "https://800052623.114.qq.com",
  "https://800056057.114.qq.com",
  "https://800053691.114.qq.com",
  "https://800057629.114.qq.com",
  "https://800058000.114.qq.com",
  "https://800057745.114.qq.com",
  "https://800060982.114.qq.com",
  "https://800059101.114.qq.com",
  "https://800058116.114.qq.com",
  "https://800059038.114.qq.com",
  "https://800065269.114.qq.com",
  "https://800061663.114.qq.com",
  "https://800064009.114.qq.com",
  "https://800064355.114.qq.com",
  "https://800066108.114.qq.com",
  "https://800066340.114.qq.com",
  "https://800066503.114.qq.com",
  "https://800066272.114.qq.com",
  "https://800067426.114.qq.com",
  "https://800066118.114.qq.com",
  "https://800066938.114.qq.com",
  "https://800067779.114.qq.com",
  "https://800076732.114.qq.com",
  "https://800071030.114.qq.com",
  "https://800074003.114.qq.com",
  "https://800069280.114.qq.com",
  "https://800078796.114.qq.com",
  "https://800073968.114.qq.com",
  "https://800070021.114.qq.com",
  "https://800079855.114.qq.com",
  "https://800080228.114.qq.com",
  "https://800081315.114.qq.com",
  "https://800080549.114.qq.com",
  "https://800082537.114.qq.com",
  "https://800081015.114.qq.com",
  "https://800082661.114.qq.com",
  "https://800083858.114.qq.com",
  "https://800082881.114.qq.com",
  "https://800081994.114.qq.com",
  "https://800088123.114.qq.com",
  "https://800084040.114.qq.com",
  "https://800085353.114.qq.com",
  "https://800089786.114.qq.com",
  "https://800088848.114.qq.com",
  "https://800088268.114.qq.com",
  "https://800089800.114.qq.com",
  "https://800090011.114.qq.com",
  "https://800091068.114.qq.com",
  "https://800092189.114.qq.com",
  "https://800094579.114.qq.com",
  "https://800085115.114.qq.com",
  "https://800091855.114.qq.com",
  "https://800098810.114.qq.com",
  "https://800092080.114.qq.com",
  "https://800101217.114.qq.com",
  "https://800098566.114.qq.com",
  "https://800104577.114.qq.com",
  "https://800106432.114.qq.com",
  "https://800107377.114.qq.com",
  "https://800103957.114.qq.com",
  "https://800130188.114.qq.com",
  "https://800137689.114.qq.com",
  "https://agdacbcacbc.800107377.114.qq.com",
  "https://800117555.114.qq.com",
  "https://800130918.114.qq.com",
  "https://800158886.114.qq.com",
  "https://800138988.114.qq.com",
  "https://800156628.114.qq.com",
  "https://800117369.114.qq.com",
  "https://800159797.114.qq.com",
  "https://800809710.114.qq.com",
  "https://938036372.114.qq.com",
  "https://8008008003.114.qq.com",
  "https://800163988.114.qq.com",
  "https://800192908.114.qq.com",
  "https://938075124.114.qq.com",
  "https://123.qq.com",
  "https://antivirus.114.qq.com",
  "https://img0.114.qq.com",
  "https://800182180.114.qq.com",
  "https://static.114.qq.com",
  "https://antivirus-4000755300.114.qq.com",
  "https://4001661700.antivirus.114.qq.com",
  "https://1234.qq.com",
  "https://12530.qq.com",
  "https://hsnbsyy.114.qq.com",
  "https://covid-19.114.qq.com",
  "https://m.17roco.qq.com",
  "https://17q.qq.com",
  "https://res.super.17zj.qq.com",
  "https://res.17xf.qq.com",
  "https://img.17roco.qq.com",
  "https://2008.qq.com",
  "https://2016gujianzhu.qq.com",
  "https://2012.qq.com",
  "https://1314.qq.com",
  "https://blog.2008.qq.com",
  "https://22.qq.com",
  "https://25.qq.com",
  "https://3c.qq.com",
  "https://bz-dc.3g.qq.com",
  "https://m1.17roco.qq.com",
  "https://c.3g.qq.com",
  "https://17roco.qq.com",
  "https://dld-cloud.3g.qq.com",
  "https://33.qq.com",
  "https://csg.3g.qq.com",
  "https://emm.3g.qq.com",
  "https://fwd.3g.qq.com",
  "https://house60.3g.qq.com",
  "https://3344.qq.com",
  "https://gp.3g.qq.com",
  "https://ibo.3g.qq.com",
  "https://infocdn.3g.qq.com",
  "https://infoapp.3g.qq.com",
  "https://web2.17roco.qq.com",
  "https://kingroot.3g.qq.com",
  "https://2ker.qq.com",
  "https://lt5.3g.qq.com",
  "https://jprxtmfpre.3g.qq.com",
  "https://cgi.3344.qq.com",
  "https://dispatcher.3g.qq.com",
  "https://jwgdapppoc.3g.qq.com",
  "https://insh-im.3g.qq.com",
  "https://ltba.3g.qq.com",
  "https://cms.wemedia.bbtt.3g.qq.com",
  "https://mcsh-im.3g.qq.com",
  "https://lview.3g.qq.com",
  "https://mam.mdm.3g.qq.com",
  "https://mamtest.mdm.3g.qq.com",
  "https://mold.3g.qq.com",
  "https://m.3g.qq.com",
  "https://msf.3g.qq.com",
  "https://dld.3g.qq.com",
  "https://mcsh.3g.qq.com",
  "https://msfwifiv6.3g.qq.com",
  "https://msfhttp.3g.qq.com",
  "https://mazu-cy.3g.qq.com",
  "https://ping.3g.qq.com",
  "https://mtthome.3g.qq.com",
  "https://mazu-hk.3g.qq.com",
  "https://mazu-rs.3g.qq.com",
  "https://ng.3g.qq.com",
  "https://pmir-rs.3g.qq.com",
  "https://msfwifi.3g.qq.com",
  "https://qiaolezi.3g.qq.com",
  "https://res2.3g.qq.com",
  "https://pim.3g.qq.com",
  "https://web.sdi.3g.qq.com",
  "https://msfxgv6.3g.qq.com",
  "https://sd30.3g.qq.com",
  "https://sharecontent.3g.qq.com",
  "https://mtt.3g.qq.com",
  "https://nggws.robot.3g.qq.com",
  "https://sparta.3g.qq.com",
  "https://sqba.3g.qq.com",
  "https://sdptest.3g.qq.com",
  "https://ptlogin2.3g.qq.com",
  "https://shcap.3g.qq.com",
  "https://qudao.3g.qq.com",
  "https://soba-im.3g.qq.com",
  "https://szsh0.3g.qq.com",
  "https://sqba-im.3g.qq.com",
  "https://tfile.3g.qq.com",
  "https://sh.3g.qq.com",
  "https://sqnk.3g.qq.com",
  "https://tgw-pmir.3g.qq.com",
  "https://sqsh.3g.qq.com",
  "https://sqsh-im.3g.qq.com",
  "https://ti10.3g.qq.com",
  "https://ti5.3g.qq.com",
  "https://tap.3g.qq.com",
  "https://ti8.3g.qq.com",
  "https://ti9.3g.qq.com",
  "https://ticannon2.3g.qq.com",
  "https://ti11.3g.qq.com",
  "https://ti3.3g.qq.com",
  "https://uembasedb.3g.qq.com",
  "https://ti7.3g.qq.com",
  "https://uembasepre.3g.qq.com",
  "https://uembranch.3g.qq.com",
  "https://uemsgpre.3g.qq.com",
  "https://yswenv.uem.3g.qq.com",
  "https://uemtestnew.3g.qq.com",
  "https://ti4.3g.qq.com",
  "https://king.tools.3g.qq.com",
  "https://uempolice.3g.qq.com",
  "https://tgw-masdk.3g.qq.com",
  "https://robotwss.starrobot.3g.qq.com",
  "https://wfinfo2.3g.qq.com",
  "https://uemworkwx.3g.qq.com",
  "https://zxcv.3g.qq.com",
  "https://wbnk.3g.qq.com",
  "https://weibo.3g.qq.com",
  "https://demo.42.qq.com",
  "https://wfinfo.3g.qq.com",
  "https://dev.4g.qq.com",
  "https://uempre.3g.qq.com",
  "https://44.qq.com",
  "https://tgw-sasdk.3g.qq.com",
  "https://wbba.3g.qq.com",
  "https://ptlogin2.51qb.qq.com",
  "https://3vs3.qq.com",
  "https://gcos.4g.qq.com",
  "https://smstest.5g.qq.com",
  "https://game.7.qq.com",
  "https://66.qq.com",
  "https://777.qq.com",
  "https://login.7.qq.com",
  "https://55.qq.com",
  "https://404.qq.com",
  "https://512.qq.com",
  "https://520.qq.com",
  "https://6.qq.com",
  "https://7q.qq.com",
  "https://a.qq.com",
  "https://7qs.qq.com",
  "https://8.qq.com",
  "https://81.qq.com",
  "https://7ohcreative.qq.com",
  "https://88.qq.com",
  "https://ab.qq.com",
  "https://888.qq.com",
  "https://9.qq.com",
  "https://res.9z.qq.com",
  "https://a1yoy.qq.com",
  "https://a1toy.qq.com",
  "https://hg.acc.qq.com",
  "https://mb.ac.qq.com",
  "https://abc.qq.com",
  "https://h5.abcmouse.qq.com",
  "https://ihg.acc.qq.com",
  "https://accountadm-cdn.qq.com",
  "https://fekit.accounts.qq.com",
  "https://9z.qq.com",
  "https://cgi.abcmouse.qq.com",
  "https://abm.qq.com",
  "https://wx.abcmouse.qq.com",
  "https://acm.qq.com",
  "https://act.qq.com",
  "https://v6.acc.qq.com",
  "https://abcmouse.qq.com",
  "https://isk.acc.qq.com",
  "https://antario.act.qq.com",
  "https://acgn.qq.com",
  "https://2018gatoradechina.act.qq.com",
  "https://bluemoon.act.qq.com",
  "https://bamatiancheng.act.qq.com",
  "https://budweiser.act.qq.com",
  "https://2ffl.act.qq.com",
  "https://adidas.act.qq.com",
  "https://maibao.access.qq.com",
  "https://bmw2011.act.qq.com",
  "https://adidasclima.act.qq.com",
  "https://dabao.act.qq.com",
  "https://desem812.act.qq.com",
  "https://crider2014.act.qq.com",
  "https://china-medicines.act.qq.com",
  "https://faw-mazda.act.qq.com",
  "https://cpic.act.qq.com",
  "https://cestbon2017.act.qq.com",
  "https://czzx9.act.qq.com",
  "https://galaxyalpha.act.qq.com",
  "https://camryhev.act.qq.com",
  "https://coolpad7296.act.qq.com",
  "https://fl.act.qq.com",
  "https://epicc.act.qq.com",
  "https://haobaba.act.qq.com",
  "https://sing.franic.act.qq.com",
  "https://cshd.act.qq.com",
  "https://dkn.act.qq.com",
  "https://ecsort.act.qq.com",
  "https://fitness.act.qq.com",
  "https://cruzemu.act.qq.com",
  "https://galaxytab.act.qq.com",
  "https://hdtsj.act.qq.com",
  "https://haval-f5.act.qq.com",
  "https://galaxys8.act.qq.com",
];

export default domains;
