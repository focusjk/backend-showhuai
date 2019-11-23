CREATE TABLE `User`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Username VARCHAR(15) NOT NULL UNIQUE,  
   Password VARCHAR(15) NOT NULL, 
   Email VARCHAR(50) NOT NULL,
   Firstname VARCHAR(15) NOT NULL,  
   Lastname VARCHAR(15) NOT NULL, 
   Phone_number VARCHAR(10) NOT NULL,
   INDEX( Username ),
   PRIMARY KEY( ID )
);

CREATE TABLE `Admin`
(  
   ID INT NOT NULL ,  
   SSN VARCHAR(13) NOT NULL UNIQUE,   
   Position VARCHAR(15) NOT NULL,
   PRIMARY KEY( ID ),
   FOREIGN KEY( ID )
	REFERENCES User( ID )
    ON DELETE CASCADE
);

CREATE TABLE `Member`
(  
   ID INT NOT NULL ,  
   Address_number VARCHAR(10) NOT NULL,  
   Street VARCHAR(40) NOT NULL,  
   Zipcode VARCHAR(5) NOT NULL,  
   Province VARCHAR(40) NOT NULL,
   PRIMARY KEY( ID ),
   FOREIGN KEY( ID )
	REFERENCES User( ID )
    ON DELETE CASCADE
);

CREATE TABLE `Promotion`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Start_date DATE  NOT NULL,
   Expired_date DATE  NOT NULL,
   Detail VARCHAR(100), 
   Discount FLOAT(2) NOT NULL,
   Admin_ID INT NOT NULL,
   INDEX( Admin_ID ),
   PRIMARY KEY( ID ),
   FOREIGN KEY( Admin_ID )
	REFERENCES `Admin`( ID )
);

CREATE TABLE `Car`
(  
   License_plate VARCHAR(30) NOT NULL ,  
   PRIMARY KEY( License_plate )
);

CREATE TABLE `Messenger`
(  
   SSN VARCHAR(13) NOT NULL,  
   Firstname VARCHAR(15) NOT NULL,  
   Lastname VARCHAR(15) NOT NULL, 
   Phone_number VARCHAR(10) NOT NULL,
   PRIMARY KEY( SSN )
);

CREATE TABLE `Sending_round`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Depart_time DATETIME  NOT NULL,
   Arrive_time DATETIME,
   Messenger_SSN VARCHAR(13) NOT NULL,
   License_plate VARCHAR(30) NOT NULL ,  
   PRIMARY KEY( ID ),
   INDEX( Messenger_SSN ),
   INDEX( License_plate ),
   FOREIGN KEY( Messenger_SSN )
	REFERENCES Messenger( SSN ),
   FOREIGN KEY( License_plate )
	REFERENCES Car( License_plate )
);

CREATE TABLE `Supplier`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Email VARCHAR(50) NOT NULL,
   Name VARCHAR(15) NOT NULL,  
   PRIMARY KEY( ID )
);

CREATE TABLE `Invoice`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Record_time DATETIME  NOT NULL,
   Total_price FLOAT(2) NOT NULL,
   PRIMARY KEY( ID )
);
CREATE TABLE `Member_invoice`
(  
   ID INT NOT NULL,  
   Sending_round_ID INT,
   Promotion_ID INT,
   Member_ID INT NOT NULL,
   INDEX( Sending_round_ID ),
   INDEX( Promotion_ID ),
   INDEX( Member_ID ),
   PRIMARY KEY( ID ),
   FOREIGN KEY( ID )
    REFERENCES Invoice( ID )
    ON DELETE CASCADE,
   FOREIGN KEY( Member_ID )
    REFERENCES `Member`( ID )
    ON DELETE CASCADE,
   FOREIGN KEY( Promotion_ID )
	REFERENCES Promotion( ID )
    ON DELETE SET NULL ,
   FOREIGN KEY( Sending_round_ID )
	REFERENCES Sending_round( ID )
    ON DELETE SET NULL 
);

CREATE TABLE `Supplier_invoice`
(  
   ID INT NOT NULL,  
   Supplier_ID INT NOT NULL,
   Admin_ID INT NOT NULL,
   INDEX( Supplier_ID ),
   INDEX( Admin_ID ),
   PRIMARY KEY( ID ),
   FOREIGN KEY( ID )
	REFERENCES Invoice( ID )
    ON DELETE CASCADE,
   FOREIGN KEY( Supplier_ID )
	REFERENCES Supplier( ID ),
   FOREIGN KEY( Admin_ID )
	REFERENCES `Admin`( ID )
);

CREATE TABLE `Product`
(  
   ID INT NOT NULL AUTO_INCREMENT,  
   Name VARCHAR(15) NOT NULL,  
   Price FLOAT(2) NOT NULL,
   Amount INT NOT NULL,
   Detail VARCHAR(100), 
   PRIMARY KEY( ID )
);
CREATE TABLE `Type_product`
(  
   ID INT NOT NULL AUTO_INCREMENT,
   Name VARCHAR(15) NOT NULL,  
   Detail VARCHAR(100), 
   PRIMARY KEY( ID )
);

CREATE TABLE `Review`
(  
   ID INT NOT NULL AUTO_INCREMENT,
   Rating INT NOT NULL,
   Detail VARCHAR(100), 
   Member_ID INT NOT NULL,
   INDEX( Member_ID ),
   PRIMARY KEY( ID ),
   FOREIGN KEY( Member_ID )
	REFERENCES `Member`( ID )
);

CREATE TABLE `Add_to_cart`
(  
   Amount INT NOT NULL,
   Product_ID INT NOT NULL,
   Member_ID INT NOT NULL,
   PRIMARY KEY( Product_ID, Member_ID ),
   FOREIGN KEY( Product_ID )
	REFERENCES Product( ID )
    ON DELETE CASCADE,
   FOREIGN KEY( Member_ID )
	REFERENCES  `Member`( ID )
    ON DELETE CASCADE
);

CREATE TABLE `Is_member_of`
(  
   Product_ID INT NOT NULL,
   Type_product_ID INT NOT NULL,
   PRIMARY KEY( Product_ID, Type_product_ID ),
   FOREIGN KEY( Product_ID )
	REFERENCES Product( ID )
    ON DELETE CASCADE,
   FOREIGN KEY( Type_product_ID )
	REFERENCES  Type_product( ID )
    ON DELETE CASCADE
);

CREATE TABLE `Transaction`
(  
   Product_ID INT NOT NULL,
   Invoice_ID INT NOT NULL,
   Review_ID INT,
   Amount INT NOT NULL,
   PRIMARY KEY( Product_ID, Invoice_ID ),
   FOREIGN KEY( Product_ID )
	REFERENCES Product( ID ),
   FOREIGN KEY( Invoice_ID )
	REFERENCES Invoice( ID ),
   FOREIGN KEY( Review_ID )
	REFERENCES  Review( ID )
    ON DELETE SET NULL
);  