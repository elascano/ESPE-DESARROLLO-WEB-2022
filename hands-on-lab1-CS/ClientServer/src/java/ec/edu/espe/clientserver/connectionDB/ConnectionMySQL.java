package ec.edu.espe.clientserver.connectionDB;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Michael
 */
public class ConnectionMySQL {

    Connection connection;

    public ConnectionMySQL() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ferreteria", "root", "");
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
    }

    public Connection getConnection() {
        return connection;
    }

}
