import java.util.concurrent.*;
import java.util.*;

public class ExecutorCallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        List<Callable<String>> tasks = List.of(
            () -> { Thread.sleep(1000); return "Task 1 done"; },
            () -> { Thread.sleep(500); return "Task 2 done"; },
            () -> { Thread.sleep(700); return "Task 3 done"; }
        );

        List<Future<String>> futures = executor.invokeAll(tasks);

        for (Future<String> f : futures) {
            System.out.println(f.get());
        }

        executor.shutdown();
    }
}
