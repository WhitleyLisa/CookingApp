using Microsoft.EntityFrameworkCore;

namespace CookingAppApi.Models
{
    public class UserDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UserDbContext(DbContextOptions<UserDbContext> options) { }
    }
}
