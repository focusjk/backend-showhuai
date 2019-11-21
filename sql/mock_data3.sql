-- Add admin
INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('admin','1234','admin@gmail.com','Jiraphat','Khupanit', '0839611592');

INSERT INTO `Admin` (ID, SSN, Position)
VALUES ( 1,'1640100328507', 'Boss');
Select * from `Admin`;

-- Add member
INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('ming','1234','ming@gmail.com','Budsakorn','Khosagrid', '0814367878');

INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('nut','1234','nut@gmail.com','Pimkunut','Theerathita', '0896785656');

INSERT INTO `Member` (ID, Address_number, Street, Zipcode, Province)
VALUES ( 2,'453', 'Rama 4', '11500', 'Bangkok');

INSERT INTO `Member` (ID, Address_number, Street, Zipcode, Province)
VALUES ( 3,'41/2', 'Rama 3', '11500', 'Bangkok');
Select * from `Member`;

-- Add promotion
INSERT INTO `Promotion` (Start_date, Expired_date, Detail, Discount, Admin_ID)
VALUES ('2019-11-09', '2019-12-09','X-mas gift',200,1);

INSERT INTO `Promotion` (Start_date, Expired_date, Detail, Discount, Admin_ID)
VALUES ('2019-11-09', '2019-12-09','11.11 D-day',111,1);

INSERT INTO `Promotion` (Start_date, Expired_date, Detail, Discount, Admin_ID)
VALUES ('2019-11-09', '2019-12-09','Welcome new year',63,1);

-- Add car
INSERT INTO `Car`(License_plate)
VALUES('AB3434');

-- Add messenger
INSERT INTO `Messenger`(SSN, Firstname, Lastname, Phone_number)
VALUES('1563244678942', 'Boonyawee', 'Kiatsilp', '0983452323');

-- Add Sending_round 
INSERT INTO `Sending_round`(Depart_time, Arrive_time, Messenger_SSN, License_plate)
VALUES('2019-11-10 09:00:00', '2019-11-10 17:00:00', '1563244678942','AB3434');

-- Add Supplier
INSERT INTO `Supplier`(Email, Name)
VALUES('supplier@gmail.com', 'Pampam');

-- Add member invoice
INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-08 09:30:23', 90);

INSERT INTO `Member_invoice`(ID, Sending_round_ID, Member_ID, Promotion_ID)
VALUES(1, 1, 2, null);

INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-09 11:30:53', 537);

INSERT INTO `Member_invoice`(ID, Sending_round_ID, Member_ID, Promotion_ID)
VALUES(2, null, 2, 3);

INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-11 15:12:23', 21339);

INSERT INTO `Member_invoice`(ID, Sending_round_ID, Member_ID, Promotion_ID)
VALUES(3, null, 2, 2);

-- Add supplier invoice
-- INSERT INTO `Invoice`(Record_time, Total_price)
-- VALUES('2019-11-08 09:30:23', 400);

-- INSERT INTO `Supplier_invoice`(ID, Supplier_ID, Admin_ID)
-- VALUES(3, 1, 1);

-- Add product
INSERT INTO `Product`(Name, Price, Amount)
VALUES('Water 1.5L', 20, 100);

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Water 1.5L', 120, 150, '6 bottles per pack');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Chocolate milk', 50, 150, 'yummy, fresh and healthy');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Melon milk', 50, 150, 'flavored milk');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Brownsugar milk', 50, 150, 'HOT!! flavored milk');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Body lotion', 550, 150, ' 350ml');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Lip tint', 350, 150, 'color: red');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Lip tint', 350, 150, 'color: baby pink');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Lip tint', 350, 150, 'color: coral');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Iphone7 256GB', 20000, 150, 'color: silver');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Iphone7 256GB', 20000, 150, 'color: black');

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('Iphone charger', 1200, 150, 'USB port + Lightning port');

-- Add type product
INSERT INTO `Type_product`(Name)
VALUES('Milk');

INSERT INTO `Type_product`(Name)
VALUES('Drink');

INSERT INTO `Type_product`(Name)
VALUES('Lipstick');

INSERT INTO `Type_product`(Name)
VALUES('Food');

INSERT INTO `Type_product`(Name)
VALUES('Skin care');

INSERT INTO `Type_product`(Name)
VALUES('Gadget');

-- Add review
INSERT INTO `Review`(Rating, Detail, Member_ID)
VALUES(3, 'I love it', 2);

-- Add Add_to_cart
INSERT INTO `Add_to_cart`(Amount, Product_ID, Member_ID)
VALUES(3, 1, 2);

INSERT INTO `Add_to_cart`(Amount, Product_ID, Member_ID)
VALUES(1, 3, 2);

-- Add Is_member_of
INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(3, 1);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(4, 1);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(5, 1);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(1, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(2, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(3, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(4, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(5, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(7, 3);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(8, 3);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(9, 3);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(1, 4);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(2, 4);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(3, 4);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(4, 4);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(5, 4);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(6, 5);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(10, 6);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(11, 6);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(12, 6);

-- Add Transaction
INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(2, 1, 1, 1);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 4, 1, null);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 5, 2, null);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 6, 2, null);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 7, 3, null);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 10, 3, null);

INSERT INTO `Transaction`(Amount, Product_ID, Invoice_ID, Review_ID)
VALUES(1, 12, 3, null);
