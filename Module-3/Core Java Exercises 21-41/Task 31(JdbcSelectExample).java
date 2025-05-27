import java.sql.*;

public class JdbcSelectExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db"; // or MySQL URL
        try (Connection conn = DriverManager.getConnection(url)) {
            Statement stmt = conn.createStatement();
            String createTable = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT)";
            stmt.execute(createTable);

            // Insert sample if table empty
            ResultSet rs = stmt.executeQuery("SELECT COUNT(*) FROM students");
            if (rs.next() && rs.getInt(1) == 0) {
                stmt.execute("INSERT INTO students (name) VALUES ('Alice'), ('Bob')");
            }

            ResultSet results = stmt.executeQuery("SELECT * FROM students");
            while (results.next()) {
                System.out.println("ID: " + results.getInt("id") + ", Name: " + results.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
