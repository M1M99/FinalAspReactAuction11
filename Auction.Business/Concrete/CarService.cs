using Auction.Business.Abstract;
using Auction.DataAccess.Abstract;
using FinalAspReactAuction.Server.Entities;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Business.Concrete
{
    public class CarService : ICarService
    {
        private readonly ICarDal _carAccess;

        public CarService(ICarDal carAccess)
        {
            _carAccess = carAccess;
        }

        public async Task AddAsync(Car car)
        {
            await _carAccess.Add(car); 
        }

        public async Task DeleteAsync(int id)
        {
            var car = await _carAccess.Get(c => c.Id == id);
            await _carAccess.Delete(car);
        }

        public async Task<List<Car>> GetAllAsync()
        {
            return await _carAccess.GetCollection();
        }

        public async Task<List<Car>> GetAllByMakeId(int makeId)
        {
            return await _carAccess.GetCollection(c => c.MakeId == makeId);
        }

        public async Task<List<Car>> GetAllByModelId(int modelId)
        {
            return await _carAccess.GetCollection(c => c.ModelId == modelId);
        }

        public async Task<Car> GetByIdAsync(int id)
        {
            return await _carAccess.Get(c => c.Id == id);
        }

        public Task UpdateAsync(Car car)
        {
            throw new NotImplementedException();
        }
    }
}
