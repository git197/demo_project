package com.example.demo.spring.proxy.dynamicproxy;

public class SimpleProxyDemo {
    public static void main(String[] args) throws SecurityException, NoSuchMethodException {
        ProxyClassImpl c = new ProxyClassImpl();
        DynamicProxyHandler proxyHandler = new DynamicProxyHandler(c);
        IProxyClass proxyClass = (IProxyClass)proxyHandler.newProxyInstance();
//        System.out.println(proxyClass.getClass().getName());
        System.out.println(proxyClass.doSomething(5));
    }
}