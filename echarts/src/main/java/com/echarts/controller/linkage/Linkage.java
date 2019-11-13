package com.echarts.controller.linkage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/linkage")
public class Linkage {

    @RequestMapping("home")
    public String home(){
        return "/linkage/v2/home";
    }

}
