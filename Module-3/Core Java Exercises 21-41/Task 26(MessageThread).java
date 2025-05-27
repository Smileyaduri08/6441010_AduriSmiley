public class MessageThread extends Thread {
    private String message;

    public MessageThread(String message) {
        this.message = message;
    }

    @Override
    public void run() {
        for(int i = 0; i < 5; i++) {
            System.out.println(message + " " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }

    public static void main(String[] args) {
        MessageThread t1 = new MessageThread("Thread 1 message");
        MessageThread t2 = new MessageThread("Thread 2 message");

        t1.start();
        t2.start();
    }
}
