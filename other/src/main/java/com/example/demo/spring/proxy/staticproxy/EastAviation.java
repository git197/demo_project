package com.example.demo.spring.proxy.staticproxy;

/**
 * 东方航空
 */
public class EastAviation implements Airplane {

    @Override
    public String byTicket(String name) {
        return name+"东方航空";
    }
}
