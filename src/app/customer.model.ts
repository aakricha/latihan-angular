export class Customer {
    CustomerID: string;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string;
    constructor(CustomerID?, CompanyName?, ContactName?, ContactTitle?, Address?, City?, Region?, PostalCode?, Country?, Phone?, Fax?) {
        this.CustomerID = CustomerID;
        this.CompanyName = CompanyName;
        this.ContactName = ContactName;
        this.ContactTitle = ContactTitle;
        this.Address = Address;
        this.City = City;
        this.Region = Region;
        this.PostalCode = PostalCode;
        this.Country = Country;
        this.Phone = Phone;
        this.Fax = Fax;
    }
}