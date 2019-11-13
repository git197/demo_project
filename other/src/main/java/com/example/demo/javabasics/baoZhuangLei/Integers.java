package com.example.demo.javabasics.baoZhuangLei;

public class Integers {

        private int num;
        public Integers(Integer num) {
            //this.num指向当前类的num
            System.out.println(this.num);
            System.out.println(num);
            this.num = num;
        }
        public int intValue() {
            return this.num;
        }


    public static void main(String[] args) {

        Integers integers = new Integers(1);

        System.out.println();
    }

}
