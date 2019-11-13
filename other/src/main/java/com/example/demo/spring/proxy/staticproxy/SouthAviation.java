package com.example.demo.spring.proxy.staticproxy;

/**
 * 南方航空
 */
public class SouthAviation implements Airplane {
    @Override
    public String byTicket(String name) {
        return name+"南方航空";
    }
}
