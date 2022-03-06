//Bai 1: Tinh tien luong nhan vien 
document.getElementById("btnBang").onclick =function(){
    var number1 =document.getElementById("bxtTich1").value;
    console.log(number1);

    var number2 =document.getElementById("bxtTich2").value;
    console.log(number2);

    number1=parseInt(number1);

    number2=100.000;

    var tich = number1 * number2;
   var kqTich="Tiền lương nhân viên :" + tich;
   console.log(kqTich);
   
   document.getElementById("thongbao").innerHTML =kqTich;

   document.getElementById("thongbao").classList.add("thongbao")
}


//Bai 2: Tinh gia tri trung binh 
 var a = 2
 var b = 2
 var c = 2
 var d = 2
 var e = 2

 document.getElementById("adnBang").onclick =function(){
   var so1 =document.getElementById("bxtA").value;
   var so2 =document.getElementById("bxtB").value;
   var so3 =document.getElementById("bxtC").value;
   var so4 =document.getElementById("bxtD").value;
   var so5 =document.getElementById("bxtE").value;
   
   so1=parseInt(so1);
   so2=parseInt(so2);
   so3=parseInt(so3);
   so4=parseInt(so4);
   so5=parseInt(so5);

   
    var trungbinh = (so1+so2+so3+so4+so5)/5
    var kqtrungBinh ="Trung binh tổng 5 số:" + trungbinh;

    document.getElementById("trungbinh").innerHTML =kqtrungBinh;

   document.getElementById("trungbinh").classList.add("trungbinh")
 }
 

//Bài 3: Quy đổi tiền
document.getElementById("bxtDoitien").onclick =function(){
    var dola =document.getElementById("bxtMoney1").value;
    console.log(dola);

    var vnDong =document.getElementById("bxtMoney2").value;
    console.log(vnDong );

    dola=parseInt(dola);

    vnDong =23.500;

    var tich = dola * vnDong;
   var kqQuydoi="Số tiền sao quy đổi:" + tich;
   console.log(kqQuydoi);
   
   document.getElementById("quydoi").innerHTML =kqQuydoi;

   document.getElementById("quydoi").classList.add("quydoi")
}



//Bai 4: Tinh chu vi, dien tich HCN

document.getElementById("btaBang").onclick =function(){
    var dai =document.getElementById("bxtDai").value;
    console.log(dai);

    var rong =document.getElementById("bxtRong").value;
    console.log(rong);

    dai =parseInt(dai);
    rong=parseInt(rong);
 
 
 var dienTich = ((dai) *(rong));
 var kqDientich="Dien tich hcn = "+ dienTich;
 console.log(kqDientich)

 

 document.getElementById("btnThongbao").innerHTML =kqDientich;

   document.getElementById("btnThongbao").classList.add("btnThongbao")

}

document.getElementById("btxBang").onclick =function(){
   var dai1 =document.getElementById("bxtDai1").value;
   

    var rong1 =document.getElementById("bxtRong1").value;

    dai1 =parseInt(dai1);
    rong1=parseInt(rong1);

    var chuVi =(dai1+rong1)*2 ;
    var kqChuvi="Chu vi hcn ="+ chuVi;
    console.log(kqChuvi)

    document.getElementById("bntThongbao").innerHTML =kqChuvi;

   document.getElementById("bntThongbao").classList.add("bntThongbao")
}







 /*Bai 5:Tinh 2 ky so 
 
 /** Gia su: n =123
  * => 1+2 +3=> 6
  * Dau vao
  * Tao bien n
  * Xu ly
  * -Lay hang don vi :n%10
  * -Lay hang chuc: Mart.floor (n% 100/10)
  * -Lay hang tram:  Mart.floor (n/100)
  * -tong 3 ky so: dv + chuc +tram*/
 
  
 var so= 12
 
 var donVi = so %10;
 var chuc = Math.floor (so%100/10);
 
 var kqTong2KySo="Tong 2 ky so la";
 console.log(kqTong2KySo);