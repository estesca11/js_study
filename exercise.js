function a(str) {
    console.log(str);
    return;
}

a(null == undefined);
a(1 == "1");
a("0xff"==255);
a(true == 1);
a(true == "1");
a(new String("a") == "a");
a(new Number(2) == 2);
a([2] == 2);
