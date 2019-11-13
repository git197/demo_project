package com.example.demo.spring.proxy.staticproxy;

/**
 * 运行测试
 */
public class RunTest {

    public static void main(String[] args) {
        //new一个代理类  代理类的被代理对象是谁  最后执行真实的对象
        Airplane ss = new FlyingPig();
        System.out.println(ss.byTicket("飞猪代理的"));
    }

}
