using Auction.Business.Abstract;
using Auction.DataAccess.Abstract;
using FinalAspReactAuction.Server.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Business.Concrete
{
    public class MakeService : IMakeService
    {
        private readonly IMakeDal _makeDal;

        public MakeService(IMakeDal makeDal)
        {
            _makeDal = makeDal;
        }

        public Task AddAsync(Make make)
        {
            return _makeDal.Add(make);
        }

        public async Task DeleteAsync(int id)
        {
            var make = await _makeDal.Get(m => m.Id == id);
            await _makeDal.Delete(make);
        }

        public async Task<List<Make>> GetAllAsync()
        {
            return await _makeDal.GetCollection();
        }

        public async Task<Make> GetByIdAsync(int id)
        {
            return await _makeDal.Get(m => m.Id == id);
        }

        public Task UpdateAsync(Make make)
        {
            throw new NotImplementedException();
        }
    }
}
