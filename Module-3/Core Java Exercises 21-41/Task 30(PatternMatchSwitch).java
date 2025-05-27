public class PatternMatchSwitch {
    public static void checkType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer: " + i;
            case String s -> "String: " + s;
            case Double d -> "Double: " + d;
            case null -> "Null value";
            default -> "Unknown type: " + obj.getClass().getName();
        };
        System.out.println(result);
    }

    public static void main(String[] args) {
        checkType(123);
        checkType("Hello");
        checkType(45.67);
        checkType(null);
        checkType(new java.util.Date());
    }
}
