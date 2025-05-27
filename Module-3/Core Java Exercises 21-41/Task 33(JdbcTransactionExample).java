import java.sql.*;

public class JdbcTransactionExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:bank.db";

        try (Connection conn = DriverManager.getConnection(url)) {
            Statement stmt = conn.createStatement();
            stmt.execute("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, balance INTEGER)");
            stmt.execute("INSERT OR IGNORE INTO accounts (id, balance) VALUES (1, 1000), (2, 1000)");

            conn.setAutoCommit(false);

            try {
                transfer(conn, 1, 2, 500);
                conn.commit();
                System.out.println("Transaction committed successfully.");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transaction rolled back due to error.");
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void transfer(Connection conn, int fromId, int toId, int amount) throws SQLException {
        String debitSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
        String creditSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";

        try (PreparedStatement debitStmt = conn.prepareStatement(debitSql);
             PreparedStatement creditStmt = conn.prepareStatement(creditSql)) {

            debitStmt.setInt(1, amount);
            debitStmt.setInt(2, fromId);
            int rowsUpdated = debitStmt.executeUpdate();
            if (rowsUpdated == 0) throw new SQLException("Debit failed, account not found.");

            creditStmt.setInt(1, amount);
            creditStmt.setInt(2, toId);
            rowsUpdated = creditStmt.executeUpdate();
            if (rowsUpdated == 0) throw new SQLException("Credit failed, account not found.");
        }
    }
}
