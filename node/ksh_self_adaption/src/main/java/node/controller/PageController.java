package node.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/self")
public class PageController {

    @RequestMapping("index1")
    public String index1(){
        return "/selfAdaption/index1";
    }
}
