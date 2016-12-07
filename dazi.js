function showChar() {
    // floor 地板 random随机
    // Math.random() 获取一个0到1之间的随机数
    // Math.floor(a)获取小于等于浮点数a,且最靠近a的整数
    // 其实也就是浮点数的整数部分
    var num = Math.floor(Math.random()*26);
    
    // num : [0 26] 27个值 
    // num为0时取到的是A
    // 获得字符串的第num个字符 code从0开始
    var char = "ABCDEFGHIGKLMNOPQRSTUVWXYZ".charAt(num);
    
    //设置id为char的元素的内容
    document.getElementById("char").innerHTML = char;
    
}

// 这两个对象在方法外 
// 为什么? 全局变量
var okCount = 0;
var errorCount = 0;

function showResult() {
    var okBili = okCount*100.0/(okCount + errorCount)+"%";
    document.getElementById("result").innerHTML = "正确:"+okCount + "个,错误:"+errorCount + "个,正确率:"+ okBili; 
}

// 当用户输入文字时,这个函数/方法会被执行
function jianpan(event) {
   //获取键盘输入的字符,并将字符大写
//    
    var key = event.key.toUpperCase();
    
    //获取id为char的元素的内容
// 当前显示的内容
    var char = document.getElementById("char").innerHTML;
    //获取id为char的元素标签
    // 这个是为了去修改要显示的内容
    var charbox = document.getElementById("char");
    
    function clearAnimation() {
        charbox.className = "animated";
        // 设置标签的颜色
        charbox.style.color = "black";
    }
    


    if(key == char){
        // 给charbox元素对象添加类名,以便于进行动画
        charbox.className = "animated zoomIn";
        showChar();
        //清理动画是什么意思????
        // 延迟500ms执行clearAnimation
        // 目的是为了防止第一个单词没有消失第二个出来
        setTimeout(clearAnimation, 500);
        okCount += 1;
        // 展示结果
        showResult();
    }
    else {
        charbox.className = "animated shake error";
        charbox.style.color = "red";
        setTimeout(clearAnimation, 500);
        errorCount += 1;
        showResult();
    }
    
    
}

