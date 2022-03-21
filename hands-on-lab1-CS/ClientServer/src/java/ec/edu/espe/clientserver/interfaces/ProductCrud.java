package ec.edu.espe.clientserver.interfaces;

import ec.edu.espe.clientserver.model.Product;
import java.util.List;

/**
 *
 * @author Michael
 */
public interface ProductCrud {

    public List listProducts();

    public Product listProduct(int id);

    public boolean addProduct(Product product);

    public boolean updateProduct(Product product);

    public boolean deleteProduct(int id);

    /*Regla de negocio*/
    public float calculateProfits(int quantity, float price);

}
