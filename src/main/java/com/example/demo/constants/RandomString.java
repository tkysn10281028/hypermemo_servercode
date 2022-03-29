package com.example.demo.constants;

import java.util.Random;

public class RandomString {
	public static String makeRandomString() {
		 String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	        String fullalphabet = alphabet + alphabet.toLowerCase() + "1234567890" + "";
	        Random random = new Random();
	        StringBuilder str = new StringBuilder();

	        for (int i = 0; i < 40; i++) {
	            char code = fullalphabet.charAt(random.nextInt(fullalphabet.length()));
	            str.append(code);
	        }
	        return str.toString();
	}
}
