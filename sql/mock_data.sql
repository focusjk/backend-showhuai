-- Add admin
INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('admin','1234','admin@gmail.com','admin firstname','admin lastname', '0811234567');

INSERT INTO `Admin` (ID, SSN, Position)
VALUES ( 1,'1234567890123', 'Boss');
Select * from `Admin`;

-- Add member
INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('ming','1234','member1@gmail.com','Ming','Mingming', '0811234567');

INSERT INTO `User` (Username, Password, Email, Firstname, Lastname, Phone_number)
VALUES ('nut','1234','member2@gmail.com','Nut','Nutnut', '0811234567');

INSERT INTO `Member` (ID, Address_number, Street, Zipcode, Province)
VALUES ( 2,'111', 'aaaa', '12312', 'Bangkok');

INSERT INTO `Member` (ID, Address_number, Street, Zipcode, Province)
VALUES ( 3,'111', 'aaaa', '12312', 'Bangkok');
Select * from `Member`;

-- Add promotion
INSERT INTO `Promotion` (Start_date, Expired_date, Detail, Discount, Admin_ID)
VALUES ('2019-11-09', '2019-12-09','Detail',100.567,1);

-- Add car
INSERT INTO `Car`(License_plate)
VALUES('AB1234');

-- Add messenger
INSERT INTO `Messenger`(SSN, Firstname, Lastname, Phone_number)
VALUES('1234512345123', 'Focus', 'Focusfocus', '0082345635');

-- Add Sending_round
INSERT INTO `Sending_round`(Depart_time, Arrive_time, Messenger_SSN, License_plate)
VALUES('2019-11-09 09:30:23', '2019-11-09 12:30:23', '1234512345123','AB1234');

-- Add Supplier
INSERT INTO `Supplier`(Email, Name)
VALUES('supplier@ggg.com', 'supplierrrr');

-- Add member invoice
INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-08 09:30:23', 200.5643);

INSERT INTO `Member_invoice`(ID, Sending_round_ID, Member_ID, Promotion_ID)
VALUES(1, 1, 2, null);

INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-08 09:30:23', 200.50);

INSERT INTO `Member_invoice`(ID, Sending_round_ID, Member_ID, Promotion_ID)
VALUES(2, 1, 3, 1);

-- Add supplier invoice
INSERT INTO `Invoice`(Record_time, Total_price)
VALUES('2019-11-08 09:30:23', 400);

INSERT INTO `Supplier_invoice`(ID, Supplier_ID, Admin_ID)
VALUES(3, 1, 1);

-- Add product
INSERT INTO `Product`(Name, Price, Amount)
VALUES('product1', 100, 0);

INSERT INTO `Product`(Name, Price, Amount, Detail)
VALUES('product1', 100.50, 0, 'werewreswrs');

-- Add type product
INSERT INTO `Type_product`(Name, Detail)
VALUES('typeproduct1', 'werwer');

INSERT INTO `Type_product`(Name)
VALUES('typeproduct2');

-- Add review
INSERT INTO `Review`(Rating, Detail, Member_ID)
VALUES(3, 'good', 2);

INSERT INTO `Review`(Rating, Detail, Member_ID)
VALUES(1, 'good', 2);

-- Add Add_to_cart
INSERT INTO `Add_to_cart`(Amount, Product_ID, Member_ID)
VALUES(3, 1, 2);

-- Add Is_member_of
INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(1, 1);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(1, 2);

INSERT INTO `Is_member_of`(Product_ID, Type_product_ID)
VALUES(2, 1);

-- Add Transaction
INSERT INTO `Transaction`(Product_ID, Invoice_ID, Review_ID)
VALUES(1, 1, 1);

INSERT INTO `Transaction`(Product_ID, Invoice_ID, Review_ID)
VALUES(2, 1, 2);

Select * from `User`;
Select * from `Admin`;
