document.addEventListener("alpine:init", () => {
  Alpine.data("produks", () => ({
    items: [
      { id: 1, name: "Biryani", img: "1.webp", price: 50000 },
      { id: 2, name: "Burger", img: "2.jpg", price: 13000 },
      { id: 3, name: "Cake", img: "3.jpg", price: 30000 },
      { id: 4, name: "chocolate", img: "4.jpg", price: 30000 },
      { id: 5, name: "Hot dog", img: "5.jpg", price: 20000 },
      { id: 6, name: "Ice cream", img: "6.jpg", price: 10000 },
      { id: 7, name: "Jus", img: "7.jpg", price: 8000 },
      { id: 8, name: "Pizza", img: "8.jpg", price: 32000 },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0, //keseluruhan barang
    add(newItem) {
      // cek barang
      const cart = this.items.find((item) => item.id === newItem.id);
      // car masih kosong
      if (!cart) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // barang sudah ada
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            // barang ada tambah jumlah quantity dan total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // item yang mau diremove berdasarkan id
      const cart = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cart.quantity > 1) {
        // telursuri 1 1
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cart.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cart.price;
      }
    },
  });
});

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
