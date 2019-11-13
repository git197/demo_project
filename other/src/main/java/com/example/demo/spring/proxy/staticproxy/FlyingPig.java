package com.example.demo.spring.proxy.staticproxy;

/**
 * 代理类
 */
public class FlyingPig implements Airplane {

    private Airplane airplane;

    public FlyingPig() {
        //被代理的类  向上转型
//        airplane = new EastAviation();
        airplane = new SouthAviation();
    }

    @Override
    public String byTicket(String name) {
        return airplane.byTicket(name);
    }
}
