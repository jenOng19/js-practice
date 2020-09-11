function mergeRanges(meetings) {

    // Merge meetings ranges
    //create a shallow copy of the meetings array
    const meetingsCopy = meetings.slice(); 
    
    //sort by start time
    const sortedMeetings = meetingsCopy.sort((a,b) =>{
        return a.startTime - b.startTime;
    })
    
    //initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings [0]];
    
    for(let i = 1; i<sortedMeetings.length; i++){
      const currentMeeting = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length-1];
      
      //If the current meeting overlaps with the last merged meeting, use the 
      //later end time of the two
      
      if(currentMeeting.startTime <= lastMergedMeeting.endTime){
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      }else{
        
        //add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
    return mergedMeetings;
  }

var timeRanges = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 }
]

const times = mergeRanges(timeRanges);
console.log(times);

//First, we sort our input array of meetings by start time so any meetings that might need to be merged are now next to each other.

//Then we walk through our sorted meetings from left to right. At each step, either:
//1.We can merge the current meeting with the previous one, so we do.
//2.We can't merge the current meeting with the previous one, so we know the previous meeting can't be merged with any future 
//meetings and we throw the current meeting into mergedMeetings.

//O(n lg n) time and O(n) space.
//Even though we only walk through our array of meetings once to merge them, we sort all the meetings first, giving us a runtime 
//of O(n\lg{n})O(nlgn). It's worth noting that if our input were sorted, we could skip the sort and do this in O(n) time!

//We create a new array of merged meeting times. In the worst case, none of the meetings overlap, giving us an array identical to 
//the input array. Thus we have a worst-case space cost of O(n).