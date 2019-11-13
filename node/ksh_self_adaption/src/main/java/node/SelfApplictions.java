package node;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class SelfApplictions {
    public static void main(String[] args) {
        SpringApplication.run(SelfApplictions.class, args);
    }
}
