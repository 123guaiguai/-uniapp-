function checkPhone(str){//验证是否为11位有效手机号码
  let regex=/^[1][3,4,5,7,8][0-9]{9}$/;
  return regex.test(str);
}
function checkPassword(str){//密码强度 6-16个字符,不包含空格,必须包含数字,字母或字符至少两种
  let regex = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
  return regex.test(str);
}
module.exports= {
  checkPassword,
  checkPhone
}