$(document).ready(function() {
  /////내 부분////
  $("#logout_btn").click(function() {
    $.post("/logout", {}, function(returnData) {
      alert(returnData.message);
      location.reload();
    });
  });

  $("#contact_btn").click(function() {
    //alert();
    const name = $("#name").val();
    const email = $("#email").val();
    const pw = $("#pw").val();
    const usr_type = $("#usr_type").val();
    const phone = $("#phone").val();
    const address = $("#address").val();

    const send_param = { name, email, pw, usr_type, phone, address };
    $.post("contact", send_param, function(returnData) {
      alert(returnData.message);
      window.close();
    });
  });

  $("#login_btn").click(function() {
    const email = $("#email").val();
    const pw = $("#pw").val();
    // alert(email + ":" + pw);
    const send_param = { email, pw };
    $.post("/login/process", send_param, function(returnData) {
      let flag = returnData.flag;
      alert(returnData.message);
      //alert(window === window.parent);
      if (flag == 1) {
        opener.location.reload();
        window.close();
      } else {
        location.reload();
      }
    });
  });
  ///////////
  $("#login_open_btn").click(function() {
    window.open(
      "login/form",
      "_blank",
      "toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,top=200,left=300,width=600,height=600"
    );
  });

  $("#report_view_btn").click(function() {});

  $("#report_btn").click(function() {
    $.get("/board/write_form", {}, function(resultData) {
      window.open(
        "/board/write_form",
        "_blank",
        "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=1500,height=800"
      );
    });
  });

  $("#r_insert_btn").click(function() {
    alert();
    const time = $("#time").val(); //발견 시간
    const r_title = $("#r_title").val();
    const threat_type = $("#threat_type").val();
    const os = $("#os").val();
    const victim_ip = $("#victim_ip").val();
    const victim_port = $("#victim_port").val();
    const attack_ip = $("#attack_ip").val();
    const r_comment = $("#r_comment").val();
    const sendParam = {
      time,
      r_title,
      threat_type,
      os,
      victim_ip,
      victim_port,
      attack_ip,
      r_comment
    };
    $.post("/board/write", sendParam, function(returnData) {
      alert(returnData.message);
    });
  });
});
