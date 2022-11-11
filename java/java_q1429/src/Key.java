// Copyright (C) 2020 Triplebyte

public class Key {
    public static void main(String[] args) {
        ButtonClick onOk = name -> System.out.println(name);
        ButtonClick onCancel = name -> System.out.println(name);
        InformationPage page = new InformationPage(onOk, onCancel);
        page.simulateActivity();
    }
}
