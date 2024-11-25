<script setup>
    import anh1 from '../assets/image/anh1.png'
    import anh2 from '../assets/image/anh1.png';
    import anh3 from '../assets/image/anh1.png';

    const items = [
        { title: '8 loại rau củ giàu can xi', content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu can xi', img: anh1 },
        { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...', img: anh2 },
        { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim', img: anh3 }
    ];
</script>

<template>
    <div class="container">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.img" alt="Hình ảnh" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>  
                </div>    
            </div>
        </div>    
    </div>
</template>
