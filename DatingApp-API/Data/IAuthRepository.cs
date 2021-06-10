using System.Threading.Tasks;
using DatingApp_API.Models;

namespace DatingApp_API.Controllers
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExist(string username);
    }
}