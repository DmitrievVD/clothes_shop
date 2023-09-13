module com.example.clothes_shop {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.clothes_shop to javafx.fxml;
    exports com.example.clothes_shop;
}