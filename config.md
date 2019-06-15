**CONFIG FILE**

---
* **Query bank branches using IFSC**
---


* **URL**           
    /api/bank/branches/get-branch/:ifsc
* **Method**        
    GET
* **URL Params**    
    IFSC code
* **Data Params**        
    None
* **Description**   
    Query branch table in Bank DB using ifsc field
* **Success Response**
    * **Code:** 200 BRANCH DETAILS FETCHED<br />
    * **Content:** `{ response: "Fetched branch details" }`
* **Error Response**
    * **Code:** 400 NOT FOUND <br />
    * **Content:**  `{ error: "Invalid IFSC code" }`



---
* **Query bank branches using bank name and city**
---


* **URL**           
    /api/bank/branches/list-branches/?bank_name=''&city_name=''
* **Method**        
    GET
* **URL Params**    
    None
* **Query Params**        
    bank_name<br>
    city_name
* **Description**   
    Query branch table in Bank DB using bank name and city name
* **Success Response**
    * **Code:** 200 BRANCH DETAILS FETCHED<br />
    * **Content:** `{ response: "Fetched branch details" }`
* **Error Response**
    * **Code:** 400 NOT FOUND <br />
    * **Content:**  `{ error: "Invalid details" }`