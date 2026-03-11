import { Product, User, Order, Banner } from '../../types';

export const initialData: {
  products: Product[];
  users: User[];
  orders: Order[];
  banners: Banner[];
  supportMessages: any[];
} = {
  products: [
    {
      id: "p1",
      name: "AirPods Pro Gen 2 (Premium)",
      pinduoduoPrice: 180,
      oldPrice: 450000,
      description: "Eng so'nggi rusumdagi AirPods Pro. Shovqinni kamaytirish (ANC) va yuqori sifatli ovoz. Xitoyning eng yaxshi fabrikasidan keltiriladi.",
      category: "Elektronika",
      images: [
        "https://images.unsplash.com/photo-1588423770186-80f3ef9adad0?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600294037681-c80b4cbfa11c?q=80&w=1000&auto=format&fit=crop"
      ],
      videos: [
        "https://assets.mixkit.co/videos/preview/mixkit-girl-putting-on-white-wireless-headphones-to-listen-to-music-34533-large.mp4"
      ],
      sizes: ["Standard"],
      rating: 4.9,
      salesCount: 1240,
      seller: {
        name: "Apple Global Store",
        avatar: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=100&auto=format&fit=crop",
        rating: 4.8,
        description: "Premium elektronika yetkazib beruvchi."
      },
      isOriginal: true,
      isCheapPrice: false,
      isFlashSale: true,
      flashSaleEnd: Date.now() + 86400000,
      weight: 0.2,
      reviews: [
        { id: "r1", userId: "u1", username: "Ali", rating: 5, comment: "Juda zo'r sifat!", date: "2024-03-01" },
        { id: "r2", userId: "u2", username: "Vali", rating: 4, comment: "Yaxshi, lekin yetkazib berish biroz kechikdi.", date: "2024-03-02" }
      ]
    }
  ],
  users: [
    {
      telegramId: "12345678",
      username: "Admin",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
      referralBalance: 50000,
      invitedCount: 12,
      bio: "Ruslan Shop asoschisi",
      isAdmin: true
    }
  ],
  orders: [],
  banners: [
    {
      id: "b1",
      title: "Yangi Mavsum To'plami",
      subtitle: "50% gacha chegirmalar",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
      link: "catalog"
    }
  ],
  supportMessages: []
};
