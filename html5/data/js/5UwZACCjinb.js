﻿window.globalProvideData('slide', '{"title":"Urutkan langkah-langkah dalam menangani surat masuk di kantor berikut ini:\\n1. Penerimaan surat\\n2. Pencatatan surat\\n3. Penyortiran surat\\n4. Pengarahan surat ke departemen terkait","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":720,"height":1280,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5UwZACCjinb","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"eval_interaction","id":"_this.5zp1w4kI14f"}]},"ReviewInt_67IW0h7ET9h":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5zp1w4kI14f.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67IW0h7ET9h_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67IW0h7ET9h_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67IW0h7ET9h","typea":"var","valueb":"6cDVI78ENwy","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cDVI78ENwy.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_67IW0h7ET9h"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cDVI78ENwy.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_67IW0h7ET9h"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_67IW0h7ET9h"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_67IW0h7ET9h":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"list_67IW0h7ET9h"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_67IW0h7ET9h":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_67IW0h7ET9h"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_67IW0h7ET9h"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_67IW0h7ET9h":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_67IW0h7ET9h"},"enabled":{"type":"boolean","value":false}}]},"67IW0h7ET9h_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5zp1w4kI14f.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6cDVI78ENwy.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67IW0h7ET9h"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5zp1w4kI14f.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5zp1w4kI14f.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67IW0h7ET9h"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5UwZACCjinb":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6PQ0jlb2Ps9"}}]},"NavigationRestrictionPreviousSlide_5UwZACCjinb":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cDVI78ENwy_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6cDVI78ENwy_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cDVI78ENwy_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67IW0h7ET9h"}]},{"kind":"showtimer","id":"_player.6cDVI78ENwy_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_67IW0h7ET9h","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_67IW0h7ET9h"}],"elseActions":[{"kind":"exe_actiongroup","id":"67IW0h7ET9h_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_67IW0h7ET9h","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67IW0h7ET9h","typea":"var","valueb":"6cDVI78ENwy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cDVI78ENwy"},"completed_slide_ref":{"type":"string","value":"_player.5ydN0RX7c7P.5XqiBVkXaVV"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_67IW0h7ET9h","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67IW0h7ET9h","typea":"var","valueb":"6cDVI78ENwy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cDVI78ENwy"},"completed_slide_ref":{"type":"string","value":"_player.5ydN0RX7c7P.5XqiBVkXaVV"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5UwZACCjinb"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5UwZACCjinb"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":186,"id":"5dJa18c1YD0"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":168349,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BEtlcndsJS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YcjVicbPWX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nqCOv5vl0G"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VwdujUsZN2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qyrLgGt3bn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60R7XLnZRg2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rTCY1TQAw2"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5dJa18c1YD0"}},{"kind":"media_play","objRef":{"type":"string","value":"5dJa18c1YD0"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5dJa18c1YD0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6HNXPJ3L5pz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_67IW0h7ET9h"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DiHCgZI5nM"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":181,"id":"01","url":"story_content/6ZMrhEQhd8i.png","type":"normal","altText":"Video (3).png","width":1151,"height":2047,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":640,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":1280,"altText":"Video (3).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":1280,"strokewidth":0}},"width":720,"height":1280,"resume":true,"useHandCursor":true,"id":"6BEtlcndsJS"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":32,"yPos":48,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":552,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":658,"bottom":1106,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":494}},"html5data":{"xPos":-3,"yPos":-3,"width":661,"height":1109,"strokewidth":3}},"width":656,"height":1104,"resume":true,"useHandCursor":true,"id":"5YcjVicbPWX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":1192,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":721,"bottom":89,"altText":"Round Same Side Corner 1","pngfb":false,"pr":{"l":"Lib","i":278}},"html5data":{"xPos":-2,"yPos":-2,"width":723,"height":91,"strokewidth":1}},"width":720,"height":88,"resume":true,"useHandCursor":true,"id":"5nqCOv5vl0G"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":112,"yPos":24,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":250,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":501,"bottom":73,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":279}},"html5data":{"xPos":-2,"yPos":-2,"width":503,"height":75,"strokewidth":1}},"width":500,"height":72,"resume":true,"useHandCursor":true,"id":"5VwdujUsZN2"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":150,"id":"01","url":"story_content/5bV4AATVx9P_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":392,"yPos":1072,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":30.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":61,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":544}},"html5data":{"xPos":0,"yPos":0,"width":61,"height":40,"strokewidth":0}},"width":61,"height":40,"resume":true,"useHandCursor":true,"id":"6qyrLgGt3bn","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5ydN0RX7c7P.6PQ0jlb2Ps9"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":149,"id":"01","url":"story_content/5bV4AATVx9P_X_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":265,"yPos":1072,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":28,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":56,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":548}},"html5data":{"xPos":0,"yPos":0,"width":56,"height":40,"strokewidth":0}},"width":56,"height":40,"resume":true,"useHandCursor":true,"id":"60R7XLnZRg2","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rTCY1TQAw2_-872381201","id":"01","linkId":"txt__default_6rTCY1TQAw2","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":466,"height":30,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"QUIZ","style":{"fontFamily":"\\"MontserratBold CharBoldE28D0D51\\",\\"Montserrat\\"","fontSize":18,"fontIsBold":false,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":23.232,"descent":6.024,"leading":0,"underlinePosition":-1.8,"underlineThickness":1.2,"xHeight":12.912}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":272,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":611}}}],"shapemaskId":"","xPos":120,"yPos":40,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":240,"rotateYPos":18,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":480,"bottom":36,"altText":"QUIZ","pngfb":false,"pr":{"l":"Lib","i":610}},"html5data":{"xPos":0,"yPos":0,"width":480,"height":36,"strokewidth":0}},"width":480,"height":36,"resume":true,"useHandCursor":true,"id":"6rTCY1TQAw2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":88,"yPos":144,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":272.5,"rotateYPos":100,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":545,"bottom":200,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":650}},"html5data":{"xPos":-1,"yPos":-1,"width":546,"height":201,"strokewidth":0}},"width":545,"height":200,"resume":true,"useHandCursor":true,"id":"6HNXPJ3L5pz"},{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":88,"yPos":376,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":272,"rotateYPos":128,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":9,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6gl5c8T8xWu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6gl5c8T8xWu","type":"vectortext","altText":"Penerimaan surat","lmstext":"Penerimaan surat","xPos":20,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":450,"height":41,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":166,"bottom":32,"altText":"Penerimaan surat","lmstext":"Penerimaan surat","pngfb":false,"pr":{"l":"Lib","i":651}}}},{"kind":"item","itemdata":"choices.choice_689idFktX0e","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_689idFktX0e","type":"vectortext","altText":"Pencatatan surat","lmstext":"Pencatatan surat","xPos":20,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":450,"height":41,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":160,"bottom":32,"altText":"Pencatatan surat","lmstext":"Pencatatan surat","pngfb":false,"pr":{"l":"Lib","i":652}}}},{"kind":"item","itemdata":"choices.choice_67EqxgTOlJu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_67EqxgTOlJu","type":"vectortext","altText":"Penyortiran surat","lmstext":"Penyortiran surat","xPos":20,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":450,"height":41,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":163,"bottom":32,"altText":"Penyortiran surat","lmstext":"Penyortiran surat","pngfb":false,"pr":{"l":"Lib","i":653}}}},{"kind":"item","itemdata":"choices.choice_6d3Inx9gXVt","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6d3Inx9gXVt","type":"vectortext","altText":"Pengarahan surat ke departemen terkait","lmstext":"Pengarahan surat ke departemen terkait","xPos":20,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":450,"height":41,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":382,"bottom":32,"altText":"Pengarahan surat ke departemen terkait","lmstext":"Pengarahan surat ke departemen terkait","pngfb":false,"pr":{"l":"Lib","i":654}}}}]},"width":544,"height":256,"resume":true,"useHandCursor":true,"id":"list_67IW0h7ET9h"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DiHCgZI5nM_2090907756","id":"01","linkId":"txt__default_6DiHCgZI5nM","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":500,"height":157,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Urutkan langkah-langkah dalam menangani surat masuk di kantor berikut ini:\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":75,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"1. Penerimaan surat\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":20,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"2. Pencatatan surat\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":20,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"3. Penyortiran surat\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":21,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"4. Pengarahan surat ke departemen terkait","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":41,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":487,"bottom":162,"pngfb":false,"pr":{"l":"Lib","i":656}}}],"shapemaskId":"","xPos":100,"yPos":160,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":260,"rotateYPos":83.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":520,"bottom":167,"altText":"Urutkan langkah-langkah dalam menangani surat masuk di kantor berikut ini:\\n1. Penerimaan surat\\n2. Pencatatan surat\\n3. Penyortiran surat\\n4. Pengarahan surat ke departemen terkait","pngfb":false,"pr":{"l":"Lib","i":655}},"html5data":{"xPos":0,"yPos":0,"width":520,"height":167,"strokewidth":0}},"width":520,"height":167,"resume":true,"useHandCursor":true,"id":"6DiHCgZI5nM"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"67IW0h7ET9h_CorrectReview","id":"01","linkId":"67IW0h7ET9h_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":627}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":626}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"67IW0h7ET9h_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"67IW0h7ET9h_IncorrectReview","id":"01","linkId":"67IW0h7ET9h_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":629}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":628}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"67IW0h7ET9h_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');