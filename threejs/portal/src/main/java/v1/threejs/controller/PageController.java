package v1.threejs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 纯页面返回
 */
@Controller
@RequestMapping("/v1/threejs")
public class PageController {

    @RequestMapping(value="/home",method= RequestMethod.GET)
    public String home() {
        return "/v1/threejs/index";
    }

}
