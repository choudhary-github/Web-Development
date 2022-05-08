obj1 = {
    a : 10,
    b : 20,
    c : 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adsf'
obj2.q = 'sfsf'
obj2.r = 'sfsf'

let obj3 = Object.create(obj2)

 // obj3.__proto__ == obj2
 // obj3.__proto__.__proto__ == obj1

/*
obj2.a -- it will try to find a in obj2
    -- if not found
    -- it will try to find in obj2.__proto__
    -- if not found
    -- it will try to find in obj2__proto__.__proto__
    --  and so on ...
    -- till .__proto__ becomes null
*/