/* EN / VN switcher: translates all visible text on the page, remembers the choice. */
(function(){
const D={
/* nav + footer + common */
"Home":"Trang chủ","Tour":"Tour","Itinerary":"Lịch trình","Experience":"Trải nghiệm","Gallery":"Thư viện ảnh","Reviews":"Đánh giá","Contact":"Liên hệ","Book Now":"Đặt ngay",
"Đà Lạt, always a good idea ♡":"Đà Lạt, lúc nào cũng là một ý tưởng hay ♡","Leave feedback":"Gửi phản hồi","Book your tour":"Đặt tour","See you in Đà Lạt! ♡":"Hẹn gặp bạn ở Đà Lạt! ♡",
/* index */
"Discover the dreamy city":"Khám phá thành phố mộng mơ","4 Days 3 Nights":"4 Ngày 3 Đêm","Nature · Relax · Unforgettable Memories":"Thiên nhiên · Thư giãn · Kỷ niệm khó quên","Explore Tour →":"Khám phá tour →",
"Why Choose Our Tour?":"Vì sao chọn tour của chúng tôi?","A small group trip designed for you to simply relax":"Chuyến đi nhóm nhỏ, được thiết kế để bạn thư giãn trọn vẹn",
"Stunning Nature":"Thiên nhiên tuyệt đẹp","Comfortable Trip":"Chuyến đi thoải mái","Professional Service":"Dịch vụ chuyên nghiệp","Best Price":"Giá tốt nhất",
"Tour Highlights":"Điểm nhấn của tour","Places you will fall in love with":"Những nơi bạn sẽ phải lòng","Cam Ly Waterfall":"Thác Cam Ly","Xuan Huong Lake":"Hồ Xuân Hương","Flower Gardens":"Vườn hoa",
"Let’s explore":"Cùng khám phá","Đà Lạt together! ♡":"Đà Lạt nhé! ♡",
/* tour */
"Tour Package":"Gói tour","Relax in the fresh air, discover the beauty of Đà Lạt!":"Thư giãn trong không khí trong lành, khám phá vẻ đẹp Đà Lạt!","Tour Overview":"Tổng quan tour",
"Slow down in the cool highland air. In 4 days you will wander through pine forests and misty hills, work on a local farm, paddle on a lake and share a campfire night, all with a small group and a friendly guide who also takes your photos.":"Chậm lại giữa không khí mát lạnh của cao nguyên. Trong 4 ngày, bạn sẽ dạo bước qua rừng thông và đồi sương mù, làm việc tại một nông trại địa phương, chèo thuyền trên hồ và cùng quây quần bên lửa trại, tất cả cùng một nhóm nhỏ và hướng dẫn viên thân thiện, người cũng sẽ chụp ảnh cho bạn.",
"Duration:":"Thời gian:","Departure:":"Khởi hành:","Group size:":"Số khách mỗi đoàn:","Price:":"Giá:","Daily":"Hằng ngày","8–10 guests":"8–10 khách","7,500,000 VND/pax":"7.500.000 VND/khách",
"What is included":"Tour bao gồm","Entrance tickets to selected attractions":"Vé vào cổng các điểm tham quan được chọn","Professional English-speaking tour guide":"Hướng dẫn viên chuyên nghiệp nói tiếng Anh","Local food and authentic Da Lat specialties":"Ẩm thực địa phương và đặc sản Đà Lạt chính gốc","Unique local farm experience":"Trải nghiệm nông trại địa phương độc đáo","Visit to Da Lat’s famous landmarks":"Tham quan các địa danh nổi tiếng của Đà Lạt","Complimentary travel photos":"Tặng ảnh du lịch miễn phí","Small-group tour (maximum 10 guests)":"Tour nhóm nhỏ (tối đa 10 khách)","Local cultural experiences":"Trải nghiệm văn hóa địa phương",
"Top Attractions":"Điểm đến nổi bật","Dinh 3 Palace":"Dinh 3","Domaine de Marie Church":"Nhà thờ Domaine de Marie","Tour at a Glance":"Tổng quan tour",
/* itinerary */
"4 Days 3 Nights in Đà Lạt":"4 Ngày 3 Đêm tại Đà Lạt","Book This Tour":"Đặt tour này","Full schedule":"Lịch trình chi tiết",
"Arrival in Đà Lạt: First Impression":"Đến Đà Lạt: Ấn tượng đầu tiên","Airport pick-up at Lien Khuong":"Đón tại sân bay Liên Khương","Railway Station, Dinh 3 and Domaine de Marie":"Ga xe lửa, Dinh 3 và nhà thờ Domaine de Marie","Xuan Huong Lake and night market food":"Hồ Xuân Hương và ẩm thực chợ đêm",
"Pick-up at Lien Khuong Airport":"Đón tại sân bay Liên Khương","Transfer to the center and quick check-in":"Về trung tâm và nhận phòng nhanh","Da Lat Railway Station":"Ga xe lửa Đà Lạt","Lunch at Huong Viet clay-pot rice":"Ăn trưa cơm niêu Hương Việt","Dinh 3":"Dinh 3","Domaine de Marie Church":"Nhà thờ Domaine de Marie","Lam Vien Square and Xuan Huong Lake":"Quảng trường Lâm Viên và hồ Xuân Hương","Da Lat avocado ice cream":"Kem bơ Đà Lạt","Haunted house mystery night (optional)":"Đêm bí ẩn tại nhà ma (tùy chọn)","Back to the homestay to rest":"Về homestay nghỉ ngơi","Da Lat night market food":"Ẩm thực chợ đêm Đà Lạt",
"A Day as a Da Lat Farmer":"Một ngày làm nông dân Đà Lạt","Plant and harvest at a local farm":"Trồng và thu hoạch tại nông trại địa phương","Coffee making and Vietnamese Coffee Workshop":"Làm cà phê và workshop cà phê Việt Nam","Sunset café and relaxing spa":"Quán cà phê ngắm hoàng hôn và spa thư giãn",
"Pho breakfast at Chu Gia":"Ăn sáng phở tại Chú Gia","Transfer to the farm":"Di chuyển đến nông trại","Farm introduction, plant and care for vegetables":"Giới thiệu nông trại, trồng và chăm sóc rau","Harvest and coffee-making process":"Thu hoạch và quy trình làm cà phê","Lunch and chat with the locals":"Ăn trưa và trò chuyện cùng người dân địa phương","More farm activities":"Thêm hoạt động tại nông trại","Vietnamese Coffee Workshop":"Workshop cà phê Việt Nam","Sunset at a hillside café":"Ngắm hoàng hôn tại quán cà phê trên đồi","Spa or massage":"Spa hoặc massage","Dinner (free or with the group)":"Ăn tối (tự do hoặc cùng đoàn)","Rest at the homestay":"Nghỉ ngơi tại homestay",
"Highland & Lake Adventure":"Phiêu lưu cao nguyên & hồ","Jeep ride up Langbiang Mountain":"Đi xe jeep lên núi Langbiang","SUP or kayak on Tuyen Lam Lake":"Chèo SUP hoặc kayak trên hồ Tuyền Lâm","BBQ party and campfire night":"Tiệc BBQ và đêm lửa trại",
"Banh mi xiu mai breakfast":"Ăn sáng bánh mì xíu mại","Transfer to Langbiang":"Di chuyển đến Langbiang","Jeep ride and panoramic views":"Đi xe jeep và ngắm toàn cảnh","Robin cable car and Truc Lam Zen Monastery":"Cáp treo Robin và Thiền viện Trúc Lâm","Central Highlands lunch":"Ăn trưa món Tây Nguyên","Transfer to Tuyen Lam Lake":"Di chuyển đến hồ Tuyền Lâm","SUP or kayak on the lake":"Chèo SUP hoặc kayak trên hồ","Back to the homestay":"Về lại homestay","Harvest produce and prepare the party":"Thu hoạch nông sản và chuẩn bị tiệc","BBQ and campfire":"BBQ và lửa trại",
"Local Flavors & Departure":"Hương vị địa phương & Chia tay","Da Lat Market and local specialties":"Chợ Đà Lạt và đặc sản địa phương","Yogurt and grilled rice paper":"Sữa chua và bánh tráng nướng","Airport farewell":"Tạm biệt tại sân bay",
"Banh uot breakfast":"Ăn sáng bánh ướt","Da Lat Market and shopping for specialties":"Chợ Đà Lạt và mua đặc sản","Light lunch with banh can":"Ăn trưa nhẹ với bánh căn","Collect luggage and check-out":"Lấy hành lý và trả phòng","Transfer to Lien Khuong Airport":"Di chuyển đến sân bay Liên Khương","Farewell at the airport":"Chia tay tại sân bay",
/* experience */
"Feel the best of Đà Lạt":"Cảm nhận những điều tuyệt nhất của Đà Lạt","More than a trip, it’s an experience.":"Hơn cả một chuyến đi, đó là một trải nghiệm.","Tour Experiences":"Trải nghiệm tour",
"A 4-day journey to discover the real Đà Lạt —":"Hành trình 4 ngày khám phá Đà Lạt chân thực —","nature, culture, local life and unforgettable moments.":"thiên nhiên, văn hóa, đời sống địa phương và những khoảnh khắc khó quên.",
"Explore iconic sites":"Khám phá địa điểm nổi tiếng","From the train station to royal palaces, discover the unique charm of Đà Lạt.":"Từ nhà ga xe lửa đến các dinh thự hoàng gia, khám phá nét quyến rũ độc đáo của Đà Lạt.",
"Nature & Adventure":"Thiên nhiên & Phiêu lưu","Breathe in fresh air, walk through pine forests and feel the true Đà Lạt.":"Hít thở không khí trong lành, dạo qua rừng thông và cảm nhận Đà Lạt đích thực.",
"1 Day as a Farmer":"1 ngày làm nông dân","Get your hands dirty, learn local farming and harvest fresh produce.":"Xắn tay áo, học làm nông và thu hoạch nông sản tươi.",
"Local Food & Coffee":"Ẩm thực & Cà phê địa phương","Taste authentic dishes, indulge in signature drinks and explore hidden cafes.":"Thưởng thức món ăn chính gốc, đồ uống đặc trưng và khám phá những quán cà phê ẩn mình.",
"Mystery Night Tour":"Tour đêm bí ẩn","Uncover the chilling stories of Đà Lạt’s haunted house — if you dare!":"Khám phá những câu chuyện rùng rợn về ngôi nhà ma Đà Lạt — nếu bạn dám!",
"Unique Stays":"Chỗ nghỉ độc đáo","Relax in handpicked accommodations with unforgettable views.":"Thư giãn tại nơi lưu trú được chọn lọc với tầm nhìn khó quên.","Same place, different feelings ♡":"Cùng một nơi, mỗi người một cảm xúc ♡",
/* gallery */
"Beautiful moments in Đà Lạt":"Những khoảnh khắc đẹp ở Đà Lạt",
/* booking */
"Book Your Tour":"Đặt tour của bạn","Đà Lạt Tour · 4 Days 3 Nights · 7,500,000 VND/pax":"Tour Đà Lạt · 4 Ngày 3 Đêm · 7.500.000 VND/khách","Full name":"Họ và tên","Phone":"Số điện thoại","Departure date":"Ngày khởi hành","Number of guests":"Số lượng khách","Total:":"Tổng cộng:","Confirm Booking":"Xác nhận đặt tour",
"Booking policy":"Chính sách đặt tour","Pay a 30% deposit to confirm your seat.":"Đặt cọc 30% để giữ chỗ.","Pay the balance 7 days before departure.":"Thanh toán phần còn lại trước ngày khởi hành 7 ngày.","Free cancellation up to 10 days before departure.":"Hủy miễn phí trước ngày khởi hành 10 ngày.","Cancel 4–9 days before: the deposit is kept.":"Hủy trước 4–9 ngày: không hoàn tiền cọc.","Small groups of 8–10 guests for the best experience.":"Nhóm nhỏ 8–10 khách để có trải nghiệm tốt nhất.",
"Your bookings":"Đặt tour của bạn","No bookings yet.":"Chưa có đặt tour nào.","Date":"Ngày","Guests":"Khách","Total":"Tổng",
"Please enter your name, phone, a departure date and 1–10 guests.":"Vui lòng nhập tên, số điện thoại, ngày khởi hành và số khách từ 1–10.",
/* feedback + reviews */
"Your Feedback":"Phản hồi của bạn","Feedback":"Phản hồi","Tell us about your trip":"Hãy kể cho chúng tôi về chuyến đi của bạn","Your name":"Tên của bạn","Rating":"Đánh giá","Comment":"Nhận xét","Send Feedback":"Gửi phản hồi","Please enter your name and a comment.":"Vui lòng nhập tên và nhận xét.","Thank you! Your review is saved.":"Cảm ơn bạn! Đánh giá của bạn đã được lưu.","See it in Reviews →":"Xem trong phần Đánh giá →",
"Guest Reviews":"Đánh giá của khách","Real moments from happy travelers":"Những khoảnh khắc thật từ du khách hài lòng","Write a Review":"Viết đánh giá",
"The farm day was my favorite. Small group, relaxed pace, and our guide took amazing photos.":"Ngày ở nông trại là ngày tôi thích nhất. Nhóm nhỏ, nhịp độ thoải mái và hướng dẫn viên chụp ảnh rất đẹp.",
"Langbiang by jeep and kayaking on the lake were unforgettable. Everything was well organized.":"Đi xe jeep lên Langbiang và chèo kayak trên hồ thật khó quên. Mọi thứ được tổ chức rất tốt.",
"Friendly guide, beautiful views and delicious local food. Da Lat felt like a dream!":"Hướng dẫn viên thân thiện, cảnh đẹp và đồ ăn địa phương ngon. Đà Lạt như một giấc mơ!",
"The campfire night after kayaking on Tuyen Lam Lake was magical. Great food, great people, and a very caring guide.":"Đêm lửa trại sau khi chèo kayak trên hồ Tuyền Lâm thật diệu kỳ. Đồ ăn ngon, mọi người tuyệt vời và hướng dẫn viên rất chu đáo.",
"Perfect for a relaxing break. The pace was slow, the homestay was cozy and every photo our guide took came out beautiful.":"Hoàn hảo cho một kỳ nghỉ thư giãn. Nhịp độ chậm rãi, homestay ấm cúng và bức ảnh nào hướng dẫn viên chụp cũng đẹp.",
"Harvesting vegetables on the local farm was such a fun surprise. I learned so much about Da Lat coffee and food.":"Thu hoạch rau ở nông trại địa phương là một bất ngờ thú vị. Tôi học được rất nhiều về cà phê và ẩm thực Đà Lạt.",
"We traveled as a small group of friends and felt looked after the whole time. Langbiang at sunrise was breathtaking!":"Chúng tôi đi theo nhóm bạn nhỏ và được chăm sóc suốt chuyến đi. Langbiang lúc bình minh đẹp đến nghẹt thở!",
"Worth every dong. The guide spoke great English, the local specialties were delicious and the whole trip was well planned.":"Đáng từng đồng. Hướng dẫn viên nói tiếng Anh rất tốt, đặc sản ngon và cả chuyến đi được lên kế hoạch chu đáo.",
/* contact */
"Contact Us":"Liên hệ với chúng tôi","We’re here to help!":"Chúng tôi luôn sẵn sàng giúp bạn!","Get in Touch":"Thông tin liên hệ","Follow Us":"Theo dõi chúng tôi","Send us a message":"Gửi tin nhắn cho chúng tôi","Name":"Tên","Email or phone":"Email hoặc số điện thoại","How can we help?":"Chúng tôi có thể giúp gì cho bạn?",
"205 Nguyen Cong Tru, Xuan Huong Ward, Da Lat, Vietnam":"205 Nguyễn Công Trứ, Phường Xuân Hương, Đà Lạt, Việt Nam",
"Please enter your name, an email or phone number, and a message.":"Vui lòng nhập tên, email hoặc số điện thoại và nội dung tin nhắn.","Message sent! We will get back to you soon.":"Đã gửi tin nhắn! Chúng tôi sẽ phản hồi bạn sớm."
};
const RX=[
[/^Day (\d+)$/,(m)=>"Ngày "+m[1]],
[/^Thank you, (.+)! Your booking for (\d+) guest\(s\) on (.+) is saved\. Total: (.+)\.$/,(m)=>`Cảm ơn ${m[1]}! Đặt tour của bạn cho ${m[2]} khách vào ngày ${m[3]} đã được lưu. Tổng: ${m[4]}.`]
];
const PRE=/^([^\p{L}\p{N}“]*)([\s\S]*?)(\s*)$/u;
function tr(s){
  const m=s.match(PRE);if(!m||!m[2])return s;
  const pre=m[1],core=m[2],suf=m[3];
  let v=D[core];
  if(v===undefined&&core.startsWith("“")&&core.endsWith("”")){const i=D[core.slice(1,-1)];if(i!==undefined)v="“"+i+"”"}
  if(v===undefined)for(const [r,f] of RX){const x=core.match(r);if(x){v=f(x);break}}
  return v===undefined?s:pre+v+suf;
}
let lang="en",busy=false;const rec=new WeakMap();let enTitle=document.title;
function node(n){
  const cur=n.nodeValue,r=rec.get(n);
  if(r&&cur===r.vi)return;
  const v=tr(cur);
  if(v!==cur){rec.set(n,{en:cur,vi:v});n.nodeValue=v}
}
function walk(root,fn){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
  const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(fn);
}
function title(vi){
  if(!vi){document.title=enTitle;return}
  const p=enTitle.split(" | ");const h=tr(p[0]);document.title=[h,...p.slice(1)].join(" | ");
}
function paint(){
  document.querySelectorAll(".lang button").forEach(b=>{const on=b.dataset.l===lang;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
}
function apply(){
  busy=true;
  if(lang==="vi"){walk(document.body,node)}
  else walk(document.body,n=>{const r=rec.get(n);if(r&&n.nodeValue===r.vi){n.nodeValue=r.en}rec.delete(n)});
  document.documentElement.lang=lang==="vi"?"vi":"en";title(lang==="vi");paint();
  busy=false;
}
function set(l){lang=l;try{localStorage.setItem("lang",l)}catch(e){}apply()}
document.addEventListener("click",e=>{const b=e.target.closest(".lang button");if(b)set(b.dataset.l)});
function start(){
  try{lang=localStorage.getItem("lang")==="vi"?"vi":"en"}catch(e){}
  new MutationObserver(ms=>{
    if(busy||lang!=="vi")return;busy=true;
    ms.forEach(m=>{
      if(m.type==="characterData")node(m.target);
      m.addedNodes.forEach(a=>{if(a.nodeType===3)node(a);else if(a.nodeType===1)walk(a,node)})
    });busy=false;
  }).observe(document.body,{childList:true,subtree:true,characterData:true});
  apply();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
