import Blog1 from "@/app/assets/images/blogs/blog_mock_1.png"
import Blog2 from "@/app/assets/images/blogs/blog_mock_2.png"
import Blog3 from "@/app/assets/images/blogs/blog_mock_3.png"



export const articles = [
    {
        id: 1,
        imageUrl: Blog1,
        title: "การอักเสบของร่างกาย",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "บรรณาธิการ Exa-med",
        publishedAt: "2024-12-19",
        viewCount: 123456,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 2,
        imageUrl: Blog2,
        title: "ฉีด 3 เข็ม มะเร็งหาย?",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "ทีมโภชนาการ Exa-med",
        publishedAt: "2025-01-05",
        viewCount: 7845,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 3,
        imageUrl: Blog3,
        title: "หาโรคพาร์กินสัน",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "ดร.กิตติพงศ์ ศรีสุข",
        publishedAt: "2025-01-20",
        viewCount: 9421,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 4,
        imageUrl: Blog1,
        title: "การอักเสบของร่างกาย",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "นักจิตวิทยาคลินิก Exa-med",
        publishedAt: "2025-02-02",
        viewCount: 5632,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 5,
        imageUrl: Blog2,
        title: "ฉีด 3 เข็ม มะเร็งหาย?",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "ศ.ดร. สุนีย์ หลับสนิท",
        publishedAt: "2025-02-15",
        viewCount: 4310,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 6,
        imageUrl:Blog3,
        title: "หาโรคพาร์กินสัน",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "กุมารแพทย์ Exa-med",
        publishedAt: "2025-02-25",
        viewCount: 2890,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 7,
        imageUrl: Blog1,
        title: "การอักเสบของร่างกาย",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "นักจิตวิทยาคลินิก Exa-med",
        publishedAt: "2025-02-02",
        viewCount: 5632,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 8,
        imageUrl: Blog2,
        title: "ฉีด 3 เข็ม มะเร็งหาย?",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "ศ.ดร. สุนีย์ หลับสนิท",
        publishedAt: "2025-02-15",
        viewCount: 4310,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
    {
        id: 9,
        imageUrl:Blog3,
        title: "หาโรคพาร์กินสัน",
        excerpt:
            "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum.",
        authorName: "กุมารแพทย์ Exa-med",
        publishedAt: "2025-02-25",
        viewCount: 2890,
        category: "สุขภาพสตรี",
        topics: [
            {
                id: 1,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
            {
                id: 2,
                title: "หัวข้อเนื้อหาที่กดแล้วเลื่อนลงไปดูได้",
                imageUrl: "https://media.istockphoto.com/id/1343098807/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%8B%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%AE%E0%B9%82%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=fR0_CDtlvgHwx_JNHINbElVLVAxQ3j-TOztjTP98az8=",
                detail: "Dignissim a, velit odio sed convallis facilisi vulputate. Consectetur ultricies metus porttitor id urna, sapien mauris sed. Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit consequat condimentum."
            },
        ],
        refers: [
            "Link ไปแหล่งอ้างอิง","Link ไปแหล่งอ้างอิง", "Link ไปแหล่งอ้างอิง"
        ]
    },
];
