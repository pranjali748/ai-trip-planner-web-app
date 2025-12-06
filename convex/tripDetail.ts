import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateTripDetail=mutation({
  args:{
    tripId:v.string(),
    
    tripDetail:v.any()
  },
  handler:async(convexToJson,args)=>{
    await convexToJson.db.insert('TripDetailTable', 
      {
      tripDetail: args.tripDetail,
      tripId: args.tripId,
      });
  },
});